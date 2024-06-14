import { shopifyUrls } from "./urls";
import { env } from "app/config/env";

export const getProducts = async (id?: string): Promise<ProductType[] | undefined> => {
  try {
    const apiUrl = id ? `${shopifyUrls.products.all}?ids=${id}` : shopifyUrls.products.all

    const response = await fetch(apiUrl,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": `${env.SHOPIFY_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    const transformedProducts = data.products?.map((product: Product) => {
      return {
        id: product.id,
        gql_id: product.variants[0].admin_graphql_api_id,
        title: product.title,
        description: product.body_html,
        price: product.variants[0].price,
        image: product.images[0].src,
        quantity: product.variants[0].inventory_quantity,
        handle: product.handle,
        tags: product.tags,
      }
    })
    return transformedProducts;
  } catch (e) {
    console.error(e);
  }
};

export const getMainProducts = async () => {
  try {
    const response = await fetch(shopifyUrls.products.mainProducts, {
      headers: new Headers({
        'X-Shopify-Access-Token': env.SHOPIFY_TOKEN
      }),
      // cache: 'force-cache' -> default
      next: {
        revalidate: 10 // reload cache cada 10 segundos
      }
    })
    const { products } = await response.json();
    return products
  } catch (error) {
    console.error(error);
  }
}
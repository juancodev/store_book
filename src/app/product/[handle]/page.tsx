import { ProductView } from "app/components/product/ProductView/ProductView";
import { getProducts } from "app/services/shopify/products";
import { redirect } from "next/navigation";

export async function generateMetadata({ searchParams }: ProductPageProps) {
  // Meta data
  const id = searchParams.id;
  const products = await getProducts(id);

  if (products) {
    const product = products[0];

    return {
      title: product.title,
      description: product.description,
      keywords: product.tags,
      openGraph: {
        images: [product.image],
      },
    };
  }
}

export default async function ProductPage(props: ProductPageProps) {
  const id = props.searchParams.id;
  const products = await getProducts(id);

  if (products) {
    const product = products[0];

    if (!id) {
      redirect("/store");
    }

    return (
      <>
        <ProductView product={product} />
      </>
    );
  } else {
    return (
      <>
        <p>Producto no encontrado!</p>
      </>
    );
  }
}

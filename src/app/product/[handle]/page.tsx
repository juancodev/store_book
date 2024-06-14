import { ProductView } from "app/components/product/ProductView/ProductView";
import { getProducts } from "app/services/shopify/products";

export default async function ProductPage(props: ProductPageProps) {
  const id = props.searchParams.id;
  const products = await getProducts(id);

  if (products) {
    const product = products[0];

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

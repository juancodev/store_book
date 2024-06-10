import Image from "next/image";
import styles from "./MainProducts.module.sass";

const getProducts = async () => {
  try {
    const response = await fetch(
      `${process.env.SHOPIFY_HOSTNAME}/admin/api/2024-04/products.json`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": process.env.SHOPIFY_API_KEY || "",
        },
      }
    );
    const data = await response.json();
    return data.products;
  } catch (e) {
    console.error(e);
  }
};

export const MainProduct = async () => {
  const products = await getProducts();
  console.log(products);
  return (
    <>
      <section className={styles.MainProducts}>
        <h3>🎉 New products released!</h3>
        <div className={styles.MainProducts__grid}>
          {products?.map((product) => {
            const imageSrc = product.images[0].src;
            return (
              <article key={product.id}>
                <p>{product.title}</p>
                <Image
                  src={imageSrc}
                  fill
                  alt={product.title}
                  loading="eager"
                />
              </article>
            );
          })}
        </div>
        <h1>Main Product</h1>
      </section>
    </>
  );
};

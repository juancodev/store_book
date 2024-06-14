import { getMainProducts } from "app/services/shopify/products";
import Image from "next/image";
import styles from "./MainProducts.module.sass";

export const MainProduct = async () => {
  const products = await getMainProducts();

  return (
    <>
      <section className={styles.MainProducts}>
        <h3>🎉 New products released!</h3>
        <div className={styles.MainProducts__grid}>
          {products?.map((product: Product) => {
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

import styles from "./Description.module.sass";
import Image from "next/image";

export const Description = () => {
  return (
    <>
      <section className={styles.Description}>
        <Image
          src="/images/bookshop.jpg"
          alt="Book Shop Image"
          width={500}
          height={300}
          // priority={false}
          //quality={100}
        />
        <div className={styles.Description__text}>
          <h2>The best Book Shop in the world</h2>
          <p>Your knowledge is power and get more reading!</p>
        </div>
      </section>
    </>
  );
};

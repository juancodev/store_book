import styles from "./Description.module.sass";

export const Description = () => {
  return (
    <>
      <section className={styles.Description}>
        <img src="/images/bookshop.jpg" alt="Book Shop Image" />
        <div className={styles.Description__text}>
          <h2>The best Book Shop in the world</h2>
          <p>Your knowledge is power and get more reading!</p>
        </div>
      </section>
    </>
  );
};

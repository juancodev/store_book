import { getCollections } from "app/services/shopify/collections";
import Link from "next/link";
import styles from "./StoreLayout.module.sass";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const collections = await getCollections();
  return (
    <>
      <nav className={styles.StoreLayout}>
        <ul className={styles.StoreLayout__list}>
          {collections.map((collection: CollectionType) => (
            <Link
              key={collection.id}
              href={"/store/" + collection.handle}
              className={styles.StoreLayout__chip}
            >
              {collection.title}
            </Link>
          ))}
        </ul>
      </nav>
      {children}
    </>
  );
}

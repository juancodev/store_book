import { MainProduct } from "app/components/home/MainProduct";
import { Metadata } from "next";

export const metada: Metadata = {
  title: "Book Shop",
  description: "Book Shop online for the mind",
};

export default function Home() {
  return (
    <main>
      <MainProduct />
    </main>
  );
}

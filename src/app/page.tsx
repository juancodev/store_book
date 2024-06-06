import { Description } from "app/components/home/Description";
import { Hero } from "app/components/home/Hero";
import { MainProduct } from "app/components/home/MainProduct";

export default function Home() {
  return (
    <main>
      <Hero />
      <Description />
      <MainProduct />
    </main>
  );
}

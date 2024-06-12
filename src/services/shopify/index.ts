import { shopifyUrls } from "./urls";
import { env } from "app/config/env";

export const getProducts = async () => {
  try {
    const response = await fetch(
      `${shopifyUrls.products.all}`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": `${env.SHOPIFY_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    return data.products;
  } catch (e) {
    console.error(e);
  }
};
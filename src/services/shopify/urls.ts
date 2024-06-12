import { env } from "app/config/env";

//endpoints
export const shopifyUrls = {
  products: {
    all: `${env.SHOPIFY_HOSTNAME}/admin/api/2024-04/products.json`,
  },
};

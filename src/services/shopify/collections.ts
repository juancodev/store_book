import { env } from "app/config/env"
import { shopifyUrls } from "./urls"

export async function getCollections() {
  try {
    const response = await fetch(`${shopifyUrls.collections.all}`, {
      headers: {
        'X-Shopify-Access-Token': env.SHOPIFY_TOKEN
      }
    })

    const collections = await response.json();

    const transformedCollections = collections.smart_collections.map((collection: CollectionType) => {
      return {
        id: collection.id,
        title: collection.title,
        handle: collection.handle,
      }
    })
    return transformedCollections;
  } catch (error) {
    console.error(error);
  }

}

export const getCollectionProducts = async (id: string) => {
  try {
    const response = await fetch(`${shopifyUrls.collections.products(id)}`, {
      headers: {
        'X-Shopify-Access-Token': env.SHOPIFY_TOKEN
      }
    })

    const { products } = await response.json()
    return products;
  } catch (error) {

  }
}
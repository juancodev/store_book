import { getProducts } from "app/services/shopify"

// Back For Front: Nos sirve para delegar del lado del cliente al servidor.
export async function GET() {
  const products = await getProducts();

  return Response.json({ products })
}
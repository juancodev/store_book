interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

interface CategoryProps {
  params: {
    categories: string[];
    searchParams?: {
      search: string;
    };
  };
}

interface ProductPageProps {
  searchParams: {
    id: string;
  }
}

interface Product {
  id: number;
  title: string;
  body_html: string;
  vendor: string;
  product_type: string;
  created_at: string;
  handle: string;
  updated_at: string;
  published_at: string;
  template_suffix: string | null;
  published_scope: string;
  price: number;
  tags: string;
  status: string;
  quantity: number;
  admin_graphql_api_id?: string;
  variants: {
    admin_graphql_api_id: string;
    price: number;
    inventory_quantity: number;
  }[];
  options: string[];
  images: {
    src: string
  }[];
  image: {
    id: number;
    alt: string | null;
    position: number;
    product_id: number;
    created_at: string;
    updated_at: string;
    admin_graphql_api_id: string;
    width: number;
    height: number;
    src: string;
    variant_ids: [];
  }
}

type ProductType = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  handle: string;
  tags: string;
};

interface CollectionType {
  id: number;
  title: string;
  handle: string;
}

interface ProductViewProps {
  product: ProductType;
}

interface ProductViewItemsOrderProps {
  maxQuantity: number;
}

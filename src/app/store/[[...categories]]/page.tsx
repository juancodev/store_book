import React from "react";

interface CategoryProps {
  params: {
    categories: string[];
    searchParams?: {
      search: string;
    };
  };
}

export default function Category(props: CategoryProps) {
  const { categories } = props.params;

  return <h1>Category: {categories}</h1>;
}

import React from "react";
import { useParams } from "react-router-dom";
import Products from "./Products";
import ProductsTwo from "./ProductsTwo";

const Category: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>(); // Extract category name from the URL

  return <Products categoryName={categoryName || ""} />;
};

export default Category;

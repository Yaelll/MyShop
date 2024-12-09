import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { ProductType } from "../@types";

const ProductsTwo = () => {
  const { categoryName: name } = useParams();
  const categoryName = name;

  const {
    data: products,
    error,
    loading,
  } = useFetch<ProductType>(`/products/categoty/${categoryName}`);
  if (categoryName == null) {
    return <div>Invalid categoryName </div>;
  }
  return (
    <div>
      <h1>Products</h1>
      console.log({categoryName})
      {products && (
        <div>
          <h2>{products.name}</h2>
          <p>{products.description}</p>
          <p>{products.price}</p>
        </div>
      )}
    </div>
  );
};

export default ProductsTwo;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaShoppingCart } from "react-icons/fa";
import { ProductType } from "../@types";
import { CartContext } from "../contexts/CartContext";

interface ProductsProps {
  categoryName: string;
}

const Products: React.FC<ProductsProps> = ({
  categoryName,
}: {
  categoryName: string;
}) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<{
    [productId: number]: string;
  }>({});

  const sizes = (categoryName: string): string[] => {
    const sizeMap: { [key: string]: string[] } = {
      Men: ["S", "M", "L"],
      Women: ["S", "M", "L"],
      "men's shoes": ["7", "8", "9", "10", "11"],
      "women's shoes": ["5", "6", "7", "8", "9"],
      "kids' shoes": ["11", "12", "13", "1", "2"],
    };

    return sizeMap[categoryName] || [];
  };

  const handleSizeSelect = (productId: number, size: string) => {
    setSelectedSize((prev) => ({
      ...prev,
      [productId]: size,
    }));
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7245/api/products/category/${categoryName}`
        );

        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Error fetching products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryName]);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
  };
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOption) {
      case "priceLowHigh":
        return a.price - b.price;
      case "priceHighLow":
        return b.price - a.price;
      case "nameAZ":
        return a.name.localeCompare(b.name);
      case "nameZA":
        return b.name.localeCompare(a.name);
      default:
        return 0; // No sorting applied
    }
  });

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeDetails = () => {
    setSelectedProduct(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bg-light-accent dark:bg-dark-accent min-h-screen p-8 relative">
      <h1 className="text-3xl font-bold text-center text-light-text dark:text-dark-text mb-6">
        Products
      </h1>

      <div className="flex justify-end mb-4">
        <select
          value={sortOption}
          onChange={handleSortChange}
          className="bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text px-4 py-2 rounded border border-gray-300"
        >
          <option value="">Sort by...</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
          <option value="nameAZ">Name: A to Z</option>
          <option value="nameZA">Name: Z to A</option>
        </select>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"></div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-light-card dark:bg-dark-card shadow-md rounded-lg overflow-hidden flex flex-col"
          >
            {/* Placeholder for image */}
            <div className="h-40 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Image</span>
            </div>

            <div className="p-4 flex flex-col flex-grow">
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-light-text dark:text-dark-text mb-2">
                  {product.name}
                </h2>
                <p className="text-sm text-light-subtext dark:text-dark-subtext mb-4">
                  {product.description.substring(0, 100)}...
                </p>
                <p className="text-xl font-bold text-light-accent2 dark:text-dark-accent2 mb-4">
                  ${product.price.toFixed(2)}
                </p>

                {sizes(categoryName).length > 0 && (
                  <div className="mb-4">
                    <label className="block text-light-text dark:text-dark-text font-medium mb-2">
                      Sizes:
                    </label>
                    <div className="flex gap-2">
                      {sizes(categoryName).map((size) => (
                        <button
                          key={size}
                          className={`px-2 py-1 border rounded ${
                            selectedSize[product.id] === size
                              ? "bg-light-accent dark:bg-dark-accent text-white"
                              : "bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text"
                          }`}
                          onClick={() => handleSizeSelect(product.id, size)}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="flex gap-x-4 mt-auto">
                <button
                  className="w-1/2 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text py-2 rounded-l hover:bg-light-accent dark:hover:bg-dark-accent transition-colors duration-300"
                  onClick={() => handleViewDetails(product)}
                >
                  View Details
                </button>
                <button
                  className="w-1/2 bg-light-accent dark:bg-dark-accent text-light-text dark:text-dark-text py-2 rounded-r hover:bg-light-accent2 dark:hover:bg-dark-accent2 transition-colors duration-300 flex items-center justify-center"
                  onClick={() =>
                    console.log(
                      `Added to cart: Product ID ${product.id}, Size ${
                        selectedSize[product.id] || "No size selected"
                      }`
                    )
                  }
                  disabled={!selectedSize}
                >
                  <FaShoppingCart className="mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center z-30">
          <div className="bg-light-background dark:bg-dark-background p-6 rounded-lg shadow-lg w-3/4 max-w-lg">
            <h2 className="text-2xl font-bold text-light-text dark:text-dark-text mb-4">
              {selectedProduct.name}
            </h2>
            <p className="text-light-subtext dark:text-dark-subtext mb-4">
              {selectedProduct.description}
            </p>
            <p className="text-xl font-bold text-light-accent2 dark:text-dark-accent2 mb-4">
              ${selectedProduct.price.toFixed(2)}
            </p>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={closeDetails}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;

import { useEffect, useState } from "react";
import { CategoryType } from "../@types";
import { getCategories } from "../services/Categoty-service";

const useCategories = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getCategories()
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { categories, loading, error };
};

export default useCategories;

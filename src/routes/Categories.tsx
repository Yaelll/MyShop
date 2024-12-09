import { Link } from "react-router-dom";
import useCategories from "../hooks/useCategories";

const Categories = () => {
  const { categories, error, loading } = useCategories();
  return (
    <div className="pt-16 min-h-screen bg-[#F6E6D8] dark:bg-[#2B343B] text-light-text dark:text-dark-text mt-0">
      <h1 className="text-3xl font-bold text-center mt-8">Shop by Category</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {error && <p>Error:{error.message ?? "something went wrong"}</p>}
        {loading && <p>Loading...</p>}
        {!loading && !error && (
          <>
            {Categories &&
              categories.map((c) => (
                <div
                  key={c.id}
                  className="relative group bg-light-accent2 dark:bg-dark-accent2 rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center text-center transition duration-300 ease-in-out bg-light-accent1 dark:bg-dark-accent1 opacity-0 group-hover:opacity-100">
                    <Link to={`/categories/${c.name}`}>
                      <button className="bg-light-background dark:bg-dark-background px-4 py-2 rounded text-light-text dark:text-dark-text font-bold hover:bg-light-accent2 dark:hover:bg-dark-accent2">
                        View Products
                      </button>
                    </Link>
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold">{c.name}</h2>
                  </div>
                </div>
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Categories;

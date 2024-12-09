import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
      <header className="h-screen bg-light-accent1 dark:bg-dark-accent1 text-center flex items-center justify-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Your Store
          </h1>
          <p className="text-lg md:text-xl mb-6">Relax and shop with us.</p>
          <Link to={"/categories"}>
            <button className="px-6 py-3 bg-light-accent2 dark:bg-dark-accent2 text-white rounded hover:bg-light-accent3 dark:hover:bg-dark-accent3">
              Shop Now
            </button>
          </Link>
        </div>
      </header>

      <section className="py-12">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">
          Explore Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 container mx-auto">
          <div className="p-4 bg-light-accent3 dark:bg-dark-accent3 rounded text-center">
            <Link to={"/categories/men"}>
              <button className="text-lg font-bold">Men</button>
            </Link>
          </div>
          <div className="p-4 bg-light-accent2 dark:bg-dark-accent2 rounded text-center">
            <Link to={"/categories/women"}>
              <button className="text-lg font-bold">Women</button>
            </Link>
          </div>
          <div className="p-4 bg-light-accent1 dark:bg-dark-accent1 rounded text-center">
            <Link to={"/categories/kids"}>
              <button className="text-lg font-bold">Kids</button>
            </Link>
          </div>
          <div className="p-4 bg-light-accent3 dark:bg-dark-accent3 rounded text-center">
            <Link to={"/categories/shoes"}>
              <button className="text-lg font-bold">Shoes</button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-light-accent2 dark:bg-dark-accent2">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">
          Our Bestsellers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto">
          <div className="p-4 bg-light-background dark:bg-dark-background rounded shadow">
            <img
              src="https://via.placeholder.com/150"
              alt="Product"
              className="mb-4 rounded"
            />
            <h3 className="text-lg font-bold">Product Name</h3>
            <p className="text-sm mb-4">Relax and enjoy this product.</p>
            <span className="text-lg font-bold">$99.99</span>
          </div>
        </div>
      </section>

      <footer className="py-6 bg-dark-background dark:bg-light-background text-center text-light-text dark:text-dark-text">
        <p>&copy; 2024 Your Store. All rights reserved.</p>
        <div className="flex justify-center mt-4">
          <a
            href="#"
            className="mx-2 hover:text-light-accent2 dark:hover:text-dark-accent2"
          >
            Facebook
          </a>
          <a
            href="#"
            className="mx-2 hover:text-light-accent3 dark:hover:text-dark-accent3"
          >
            Instagram
          </a>
          <a
            href="#"
            className="mx-2 hover:text-light-accent1 dark:hover:text-dark-accent1"
          >
            Twitter
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;

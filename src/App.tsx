import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Products from "./routes/Products";
import Register from "./routes/Register";
import NotFound from "./routes/NotFound";
import NavBar from "./components/NavBar";
import ProtectesRoute from "./components/ProtectesRoute";
import NoAuthRoute from "./components/NoAuthRoute";
import Footer from "./components/Footer";
import Categories from "./routes/Categories";
import Category from "./routes/Category";
const App = () => {
  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:categoryName" element={<Category />} />

          <Route
            path="/register"
            element={
              <NoAuthRoute>
                <Register />
              </NoAuthRoute>
            }
          />
          <Route
            path="/login"
            element={
              <NoAuthRoute>
                <Login />
              </NoAuthRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;

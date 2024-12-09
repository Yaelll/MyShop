import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import useDarkMode from "../hooks/useDarkMode";
import { BsGithub } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import useAuth from "../hooks/useAuth";

const NavBar = () => {
  const { darkMode, toggle } = useDarkMode();
  const { isLoggedIn, logout } = useAuth();
  return (
    <nav
      id="app-nav"
      className="shadow-2xl p-8 flex gap-3 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text"
    >
      <NavLink className="rounded-lg p-2" to="/">
        Home
      </NavLink>
      <NavLink className="rounded-lg p-2" to="/about">
        About
      </NavLink>
      {isLoggedIn && (
        <NavLink className="rounded-lg p-2" to="/products">
          Products
        </NavLink>
      )}
      <NavLink className="rounded-lg p-2" to="/categories">
        Categoty
      </NavLink>

      <div className="flex-1"></div>

      <div className="hidden sm:flex items-center">
        {!isLoggedIn && (
          <>
            <NavLink className="rounded-lg p-2" to="/login">
              Login
            </NavLink>
            <NavLink className="rounded-lg p-2" to="/register">
              Register
            </NavLink>
          </>
        )}

        {isLoggedIn && (
          <button onClick={logout} className="rounded-lg p-2">
            <BiLogOut aria-description="Logout" />
          </button>
        )}

        <button onClick={toggle} className="rounded-lg p-2">
          {darkMode ? "🌞" : "🌚"}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

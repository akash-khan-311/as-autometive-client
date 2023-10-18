import React, { useContext, useEffect, useState } from "react";
import {
  MobileNav,
  Typography,
  Button,
  IconButton,
  Avatar,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/icon/logo.png";
import "./NavMenu.css";
import { AuthContext } from "../../Context/AuthProvider";
import { FaSignOutAlt } from "react-icons/fa";
import toast from "react-hot-toast";
const NavMenu = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => toast.success("User logged out"))
      .catch((error) => toast.error(error.message));
  };

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-white">
      <Typography as="li" variant="large" className="p-1 font-normal">
        <NavLink to={"/"} className="flex items-center">
          Home
        </NavLink>
      </Typography>
      <Typography as="li" variant="large" className="p-1 font-normal">
        <NavLink to={"/addproduct"} className="flex items-center">
          Add Product
        </NavLink>
      </Typography>
      <Typography as="li" variant="large" className="p-1 font-normal">
        <NavLink to={"/mycart"} className="flex items-center">
          My Cart
        </NavLink>
      </Typography>
    </ul>
  );
  return (
    <div>
      <nav className="mx-auto  py-2  lg:py-4">
        <div className="container mx-auto flex items-center justify-between text-white">
          <Typography className="mr-4 cursor-pointer py-1.5 font-medium w-56">
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
          </Typography>
          <div className="hidden lg:block">{navList}</div>
          {user ? (
            <div className="flex items-center gap-5">
              <h2 className="font-semibold text-lg">{user.displayName}</h2>
              <button onClick={handleLogout} className="">
                <FaSignOutAlt className="text-3xl" />
              </button>
            </div>
          ) : (
            <Link to={"/login"}>
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Login</span>
              </Button>
            </Link>
          )}

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          <div className="container mx-auto">
            {navList}
            <Link to={"/login"}>
              <Button variant="" size="sm" fullWidth className="mb-2">
                <span>Login</span>
              </Button>
            </Link>
          </div>
        </MobileNav>
      </nav>
    </div>
  );
};

export default NavMenu;

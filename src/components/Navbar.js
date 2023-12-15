import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png"; // Adjust the path to your logo

import "../style/Navbar.css"; // Import the CSS file

const Navbar = () => (
  <Stack className="navbar-container">
    <Link to="/">
      <img src={Logo} alt="logo" className="logo" />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="roboto"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" className="nav-link">
        Home
      </Link>
      <a href="#exercises" className="nav-link">
        Exercises
      </a>
    </Stack>
  </Stack>
);

export default Navbar;

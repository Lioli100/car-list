import React from "react";
import { Link } from "react-router-dom";
import MenuItem from "./menuitem";
import Menu from "./menu";

function Header() {
  return (
    <Menu>
      <Link to="/carros">
        <MenuItem>Carros</MenuItem>
      </Link>
      <Link to="/marcas">
        <MenuItem>Marcas</MenuItem>
      </Link>
    </Menu>
  );
}

export default Header;

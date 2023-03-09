import React from 'react'
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css"

export const Navbar = () => {
  return (
    <div className="navbar">
        <h4>Nome da loja</h4>
        <div className="links">
            <Link to="/">Shop</Link>
            <Link to="carrinho">
                <ShoppingCart size={32} />
            </Link>
        </div>

    </div>
  )
};
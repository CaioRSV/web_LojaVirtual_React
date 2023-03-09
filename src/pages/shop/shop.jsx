import React from 'react'

import { PRODUTOS } from "../../produtos"
import { Produto } from "./produto"
import "./shop.css"

export const Shop = () => {
  return (
    <div className="shop">
        <div className = "shopTitle">
            <h1>Loja virtual</h1>
        </div>

        <div className="produtos">
            {PRODUTOS.map((produto) => 
            <Produto data={produto}/>
            )}

        </div>

    </div>
  )
};

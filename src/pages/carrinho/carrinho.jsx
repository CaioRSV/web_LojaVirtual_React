import React, { useContext } from 'react'
import {PRODUTOS} from "../../produtos"
import { ShopContext } from "../../context/shop-context"
import { CarrinhoItem } from "../carrinho/carrinho-item"
import { useNavigate } from "react-router-dom";
import "./carrinho.css"


export const Carrinho = () => {
  const {itensCarrinho, getTotalCarrinho} = useContext(ShopContext);
  const totalAmount = getTotalCarrinho();
  const navigate = useNavigate();
  return (
    <div className="carrinho">
      <div nameClass = "carrinhoTitle">
        <h1>Itens no carrinho:</h1>
      </div>
      <div nameClass = "itensCarrinho">
        {PRODUTOS.map((produto) => {
          if (itensCarrinho[produto.id] !== 0){
            return <CarrinhoItem data={produto}/>
          }

        })}      
      </div>
      {totalAmount > 0 ?
      <div className="checkout">
        <p> Subtotal: R$ {totalAmount}</p>
        <button onClick={() => navigate("/")}> Continue Shopping</button>
        <button> Checkout</button>
      </div>

      :<p>Seu carrinho está vazio.</p>}
    </div>
  )
};

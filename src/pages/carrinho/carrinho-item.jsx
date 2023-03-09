import React from 'react'
import { useContext } from 'react';
import { ShopContext } from "../../context/shop-context"
import "./../carrinho/carrinho.css"

export const CarrinhoItem = (props) => {

    const {id, prodName, price, prodImage} = props.data;
    const {itensCarrinho, addToCarrinho, removeFromCarrinho, updateCarrinhoItemCount} = useContext(ShopContext);

    return (
        <div className="carrinhoItem">
            {" "}
            <img src={prodImage} />
            <div className="desc">
                <p><b>{prodName}</b></p>

                <p>R$ {price}</p>

                <div className="countHandler">
                    <button onClick={() => removeFromCarrinho(id)}>-</button>
                    <input value={itensCarrinho[id]} onChange={(e) => {updateCarrinhoItemCount(Number(e.target.value), id)}}/>
                    <button onClick={() => addToCarrinho(id)}>+</button>
                    <br/>
                    <br/>

                </div>

            </div>

        </div>
        )

}

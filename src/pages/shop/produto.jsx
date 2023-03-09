import React from 'react'
import { useContext } from 'react';

import { ShopContext } from "../../context/shop-context"

export const Produto = (props) => {
    const {id, prodName, price, prodImage} = props.data;
    const {addToCarrinho, itensCarrinho} = useContext(ShopContext);
  
    const itemAmountCarrinho = itensCarrinho[id];
    
    return (
    <div className="produto">
        <img src={prodImage} />
        <div className="desc">
            <p>
                <b>{prodName}</b>
            </p>
            <p>
                <b>R$ {price}</b>
            </p>

        </div>
        <button className="addBut_Carrinho" onClick={() => addToCarrinho(id)}> 
        Adicionar ao carrinho {itemAmountCarrinho > 0 && <> ({itemAmountCarrinho}) </>}
        </button>
    </div>
  );
}

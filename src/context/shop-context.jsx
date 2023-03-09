import React, { createContext, useState} from 'react'
import { PRODUTOS } from "../produtos"

export const ShopContext = createContext(null);

const getCarrinhoDefault = () =>{
    let carrinho = {}
    for (let i = 1; i < PRODUTOS.length + 1; i++){
        carrinho[i] = 0;
    }
    return carrinho;
}

export const ShopContextProvider = (props) => {
    const [itensCarrinho, setItensCarrinho] = useState(getCarrinhoDefault());

    const getTotalCarrinho = () => {
        let totalAmount = 0;
        for (const item in itensCarrinho) {
            if (itensCarrinho[item] > 0) {
                let itemInfo = PRODUTOS.find((produto) => produto.id === Number(item))
                totalAmount += itensCarrinho[item] * itemInfo.price
            }
        }

        return totalAmount;
    };

    const addToCarrinho = (itemId) => {
        setItensCarrinho((prev) => ({...prev, [itemId] : prev[itemId]+1 }))
    };

    const removeFromCarrinho = (itemId) => {
        setItensCarrinho((prev) => ({...prev, [itemId] : prev[itemId]-1 }))
    };

    const updateCarrinhoItemCount = (newAmount, itemId) => {
        setItensCarrinho((prev) => ({...prev, [itemId] : newAmount}))
    }

    const contextValue = {itensCarrinho, addToCarrinho, removeFromCarrinho, updateCarrinhoItemCount, getTotalCarrinho};

    return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

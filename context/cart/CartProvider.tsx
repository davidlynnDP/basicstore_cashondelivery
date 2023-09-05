import React, { PropsWithChildren, useEffect, useReducer } from 'react';
import { v4 as uuid } from 'uuid';

import { CartContext, cartReducer } from './';
import { ICartProduct, IOrder } from '@/interfaces/cart';

export interface CartState {
    transactionId?: string;
    uploadedData: boolean;
    orderItems: ICartProduct[];

    numberOfItems: number;
    subTotal     : number;
    tax          : number;
    total        : number;   
}

const CART_INITIAL_STATE: CartState = {
    transactionId: undefined,
    uploadedData: false,
    orderItems: [],

    numberOfItems: 0,
    subTotal     : 0,
    tax          : 0,
    total        : 0,   
}


export interface createOrderReturn {
    hasError: boolean;
    order: IOrder | null;
}

export const CartProvider: React.FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer( cartReducer , CART_INITIAL_STATE );

    useEffect(() => {
        try {
            const storageProducts = localStorage.getItem('cart') ? JSON.parse( localStorage.getItem('cart')! ): [] 
            dispatch({ type: '[Cart] - LoadCart from cookies | storage', payload: storageProducts });
        } catch (error) {
            dispatch({ type: '[Cart] - LoadCart from cookies | storage', payload: [] });
        }
    }, []);

    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify( state.orderItems ));  
    }, [state.orderItems]);


    useEffect(() => {
        const numberOfItems = state.orderItems.reduce( ( prev, current ) => current.quantity + prev , 0 );  
        const subTotal = state.orderItems.reduce( ( prev, current ) => (current.price * current.quantity) + prev, 0 );
        const taxRate =  Number( /* variable de entorno || */ 0 ); 
    
        const orderSummary = {
            numberOfItems,
            subTotal,
            tax: subTotal * taxRate,
            total: subTotal + taxRate  
        }

        dispatch({ type: '[Cart] - Update order summary', payload: orderSummary });
    }, [state.orderItems]);


    const addProductToCart = ( product: ICartProduct ) => {

        const productInCart = state.orderItems.some( p => p.id === product.id );
        if ( !productInCart ) return dispatch({ type: '[Cart] - Update products in cart', payload: [ ...state.orderItems, product ] })

        //*Acumulacion
        const updatedProducts = state.orderItems.map( p => {
            if ( p.id !== product.id ) return p;  

            //*Actualizar la cantidad
            p.quantity += product.quantity;
            return p;
        });

        dispatch({ type: '[Cart] - Update products in cart', payload: updatedProducts });
    }


    const updateCartQuantity = ( product: ICartProduct ) => {
        dispatch({ type: '[Cart] - Change cart quantity', payload: product });
    }


    const removeCartProduct = ( product: ICartProduct ) => {
        dispatch({ type: '[Cart] - Remove product in cart', payload: product });
    }


    const createOrder = (): createOrderReturn => {

        const purchaseOrder: IOrder = {
            transactionId: uuid(),
            orderItems: state.orderItems.map( p => ({
                ...p,
            })),
            numberOfItems: state.numberOfItems,
            subTotal: state.subTotal,
            tax: state.tax,
            total: state.total,
        }

        try {
            
            dispatch({ type: '[Cart] - Order complete' });
            return {
                hasError: false,
                order: purchaseOrder,
            }

        } catch ( error ) {
            return {
                hasError: true,
                order: null,
            }
        }
    }


    return (
        <CartContext.Provider value={{
            ...state,

            // Methods
            addProductToCart,
            removeCartProduct,
            updateCartQuantity,

            // Orders
            createOrder,
        }}>
            { children }
        </CartContext.Provider>
    )
};
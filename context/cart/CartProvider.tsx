import { useEffect, useReducer, PropsWithChildren } from 'react';
import axios from 'axios';

import { CartContext, cartReducer } from './';
import { ICartProduct, IOrder } from '@/interfaces/cart';


export type ResponseOrder = { 
  hasError: boolean, 
  message: string,
}


export interface CartState {
    isLoaded: boolean;
    cart: ICartProduct[];
    numberOfItems: number;
    subTotal: number;
    tax: number;
    total: number;
}

const CART_INITIAL_STATE: CartState = {
    isLoaded: false,
    cart: [],
    numberOfItems: 0,
    subTotal: 0,
    tax: 0,
    total: 0,
}


export const CartProvider: React.FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer( cartReducer , CART_INITIAL_STATE );

    useEffect(() => {
        try {
            const cookieProducts = localStorage.getItem('cart') ? JSON.parse( localStorage.getItem('cart')! ): [] 
            dispatch({ type: '[Cart] - LoadCart from cookies | storage', payload: cookieProducts });
        } catch (error) {
            dispatch({ type: '[Cart] - LoadCart from cookies | storage', payload: [] });
        }
    }, []);


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify( state.cart )); 
    }, [ state.cart ]);

    useEffect(() => {
        const numberOfItems = state.cart.reduce( ( prev, current ) => current.quantity + prev , 0 );  
    
        const subTotal = state.cart.reduce( ( prev, current ) => (current.price * current.quantity) + prev, 0 );
        const taxRate =  Number( process.env.NEXT_PUBLIC_TAX_RATE || 0 ); 
    
        const orderSummary = {
            numberOfItems,
            subTotal,
            tax: subTotal * taxRate,
            total: subTotal + taxRate 
        }

        dispatch({ type: '[Cart] - Update order summary', payload: orderSummary });
    }, [ state.cart ]);



    const addProductToCart = ( product: ICartProduct ) => {



        const productInCart = state.cart.some( p => p.id === product.id ); 
        if ( !productInCart ) return dispatch({ type: '[Cart] - Update products in cart', payload: [...state.cart, product ] }) 

        const updatedProducts = state.cart.map( p => {
            if ( p.id !== product.id ) return p;  
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


    const createOrder = (): ResponseOrder => {

        const body: IOrder = {
            orderItems: state.cart.map( p => ({
                ...p,
                size: p.size!  
            })),
            numberOfItems: state.numberOfItems,
            subTotal: state.subTotal,
            tax: state.tax,
            total: state.total,
        }

        try {
            
            //falta dispatch
            dispatch({ type: '[Cart] - Order complete' });

            return {
                hasError: false,
                message: ''
            }


        } catch (error) {
            return {
                hasError: true,
                message : 'Error no controlado, hable con el administrador'
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
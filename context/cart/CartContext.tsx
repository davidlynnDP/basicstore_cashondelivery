import { createContext } from 'react';
import { ICartProduct } from '@/interfaces/cart';
import { ResponseOrder } from './';


//Cambiar - [numberOfItems - subTotal - tax - total] por order: IOrder
interface ContextProps {
    isLoaded: boolean;
    cart: ICartProduct[]; 
    numberOfItems: number;
    subTotal: number;
    tax: number;
    total: number;

    // Methods
    addProductToCart: (product: ICartProduct) => void;  
    updateCartQuantity: (product: ICartProduct) => void;
    removeCartProduct: (product: ICartProduct) => void;

    // Orders
    createOrder: () => ResponseOrder;
}


export const CartContext = createContext({} as ContextProps);
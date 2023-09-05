import { createContext } from 'react';
import { createOrderReturn } from './';
import { ICartProduct } from '@/interfaces/cart';


interface ContextProps {
    transactionId?: string;
    uploadedData: boolean;
    orderItems: ICartProduct[];

    numberOfItems: number;
    subTotal     : number;
    tax          : number;
    total        : number;   

    // Methods
    addProductToCart: (product: ICartProduct) => void; 
    updateCartQuantity: (product: ICartProduct) => void;
    removeCartProduct: (product: ICartProduct) => void;

    // Orders
    createOrder: () => createOrderReturn;
}


export const CartContext = createContext({} as ContextProps);
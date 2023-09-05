import { useContext } from 'react';
import { ICartProduct } from '@/interfaces/cart';
import { CartContext, createOrderReturn } from '@/context/cart';


interface ICHOrder {
    transactionId?: string;
    isTransactionIdReady: boolean;

    numberOfItems : number;
    subTotal      : number;
    tax           : number;
    total         : number; 
}

interface ICHShoppingCart {
    cart: ICartProduct[];
    order: ICHOrder;
    uploadedData: boolean;

    // Methods
    addProductToCart: (product: ICartProduct) => void; 
    updateCartQuantity: (product: ICartProduct) => void;
    removeCartProduct: (product: ICartProduct) => void;
    
    // Orders
    createOrder: () => createOrderReturn;
}


export const useShoppingCart = (): ICHShoppingCart => {

    const { orderItems, 
            transactionId, 
            numberOfItems, 
            subTotal, 
            tax, 
            total, 
            uploadedData,
            addProductToCart,
            updateCartQuantity,
            removeCartProduct,
            createOrder 
        } = useContext( CartContext );

    const order: ICHOrder = {
        transactionId,
        isTransactionIdReady: !!transactionId,

        numberOfItems,
        subTotal,
        tax,
        total,
    }

    return {
        cart: orderItems,
        order,
        uploadedData,

        // Methods
        addProductToCart,
        updateCartQuantity,
        removeCartProduct,
        createOrder 
    }
}

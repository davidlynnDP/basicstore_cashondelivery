import { ValidSizes, ValidTypes } from './products';


//* unico producto en el carrito de compras
export interface ICartProduct {
    id: string;
    image: string;
    price: number;
    size: ValidSizes;
    slug: string;
    title: string;
    type: ValidTypes;
    
    quantity: number;   // hace referencia a cuantos productos estamos llevando en el carrito de compras
}

//* orden completa en el carrito de compras
export interface IOrder {
    transactionId?: string;
    orderItems: ICartProduct[];

    numberOfItems: number;
    subTotal     : number;
    tax          : number;
    total        : number;   
}
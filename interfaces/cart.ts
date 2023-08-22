import { ValidSizes, ValidTypes } from './products';


// de esta manera luce un unico producto en el carrito de compras
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

export interface IOrder {
    _id? : string;
    orderItems: ICartProduct[];

    numberOfItems: number;
    subTotal     : number;
    tax          : number;
    total        : number;

    transactionId?: string;
}

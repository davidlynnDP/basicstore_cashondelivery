import { CartState } from './';
import { ICartProduct } from '@/interfaces/cart';


type CartActionType = 
   | { type: '[Cart] - LoadCart from cookies | storage', payload: ICartProduct[] } 
   | { type: '[Cart] - Update products in cart', payload: ICartProduct[] }
   | { type: '[Cart] - Change cart quantity', payload: ICartProduct }
   | { type: '[Cart] - Remove product in cart', payload: ICartProduct }
   | { 
      type: '[Cart] - Update order summary', 
      payload: {
         numberOfItems: number;
         subTotal: number;
         tax: number;
         total: number;
      }
   }
   | { type: '[Cart] - Order complete' }

   
export const cartReducer = ( state: CartState, action: CartActionType ): CartState => {

   switch (action.type) {
      case '[Cart] - LoadCart from cookies | storage':
         return {
            ...state,
            uploadedData: true,
            orderItems: [ ...action.payload ]
          }

      case '[Cart] - Update products in cart':
         return {
            ...state,
            orderItems: [ ...action.payload ]
         }

      case '[Cart] - Change cart quantity':
         return {
            ...state,
            orderItems: state.orderItems.map( product => {
               if ( product.id !== action.payload.id ) return product;    
               return action.payload;  
            })
         }

      case '[Cart] - Remove product in cart':
         return {
            ...state,
            orderItems: state.orderItems.filter( product => !(product.id === action.payload.id) )
         }

      case '[Cart] - Update order summary':
         return {
            ...state,
            ...action.payload
         }

      case '[Cart] - Order complete':
         return {
            ...state,

            orderItems: [],
            numberOfItems: 0,
            subTotal: 0,
            tax: 0,
            total: 0
         }

       default:
          return state;
   }

}
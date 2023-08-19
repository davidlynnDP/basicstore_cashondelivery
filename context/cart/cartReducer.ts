import { ICartProduct } from '@/interfaces/cart';
import { CartState } from './';


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

   switch ( action.type ) {
      case '[Cart] - LoadCart from cookies | storage':
         return {
            ...state,
            isLoaded: true,
            cart: [ ...action.payload ]
          }

      case '[Cart] - Update products in cart':
         return {
            ...state,
            cart: [ ...action.payload ]
         }


      // el proceso es que deberiamos de recibir una nueva cantidad y actualizar el producto 
      case '[Cart] - Change cart quantity':
         return {
            ...state,
            cart: state.cart.map( product => {
               if ( product.id !== action.payload.id ) return product;  
      
               return action.payload;  
            })
         }


      // debemos de hacer la eliminacion de un producto en el carrito de compras sin importar cuantos productos estemos llevando 
      case '[Cart] - Remove product in cart':
         return {
            ...state,
            cart: state.cart.filter( product => !(product.id === action.payload.id) )
         }

      // valores financieros del carrito de compras
      case '[Cart] - Update order summary':
         return {
            ...state,
            ...action.payload
         }


      //vaciar el carrito y limpiar el state
      case '[Cart] - Order complete':
         return {
            ...state,
            cart: [],
            numberOfItems: 0,
            subTotal: 0,
            tax: 0,
            total: 0
         }

       default:
          return state;
   }

}
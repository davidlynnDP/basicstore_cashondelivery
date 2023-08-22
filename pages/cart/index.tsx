import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import { CartContext } from '@/context/cart';
import { ShoppingList, OrderSummary } from '@/components/cart';
import { RootLayout } from '@/components/layouts/RootLayout';

import styles from '../../styles/CartPage.module.css'


const CartPage = () => {

    const { isLoaded, cart } = useContext( CartContext );
    const router = useRouter();

    useEffect(() => {
      if ( isLoaded && cart.length === 0 ){
        router.replace('/cart/empty');  
      }
    }, [ isLoaded, cart, router ])
    
    if ( !isLoaded || cart.length === 0 ) {
        return (<></>);
    }

  return (

    <RootLayout>
      <div className={ styles.ct_cart }>

        <div className={ styles.ct_list }>
          {
            cart.map( product => (
              <ShoppingList key={ product.id } product={ product }/>
            )) 
          }
        </div>

        <OrderSummary cartInfo />

      </div>
    </RootLayout>

  )

}

export default CartPage
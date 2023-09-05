import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import { CartContext } from '@/context/cart';
import { ShoppingList, OrderSummary } from '@/components/cart';
import { RootLayout } from '@/components/layouts/RootLayout';

import styles from '../../styles/CartPage.module.css'
import { useShoppingCart } from '@/hooks';


const CartPage = () => {
  
    const router = useRouter();
    const { uploadedData, cart } = useShoppingCart(); 

    useEffect(() => {
      if ( uploadedData && cart.length === 0 ){
        router.replace('/cart/empty');  
      }
    }, [ uploadedData, cart, router ])
    
    if ( !uploadedData || cart.length === 0 ) {
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
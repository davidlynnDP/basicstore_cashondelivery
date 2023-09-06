
import { RootLayout } from '@/components/layouts/RootLayout'
import styles from '../styles/ThanksPage.module.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import { useShoppingCart } from '@/hooks';


const ThanksPage = () => {

  const router = useRouter();
  const { order, cart } = useShoppingCart(); 

  useEffect(() => {
    if ( !order.transactionId && cart.length === 0 ){
      router.replace('/cart/empty');  
      return;
    }

    if ( !order.transactionId ){
      router.replace('/cart');  
      return;
    }
  }, [ order, cart, router ])
  
  return (

    <RootLayout>
      <div className={ styles.ct_thanks }>

        <h1 className={ styles.pg_dark }>¡Bienvenido a la experiencia de descanso que mereces!</h1>
        <h2 className={ styles.pg }>Tu satisfacción es nuestra prioridad, y esperamos que disfrutes de un sueño reparador y revitalizante en nuestras exclusivas creaciones. </h2>
        <button onClick={ () => router.push('/') } className={ styles.btn_thanks }>Regresar</button>

      </div>

    </RootLayout>
    

  )
}

export default ThanksPage

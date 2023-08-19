
import { RootLayout } from '@/components/layouts/RootLayout'
import styles from '../styles/ThanksPage.module.css'
import { useRouter } from 'next/router'


const ThanksPage = () => {

    const router = useRouter()
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

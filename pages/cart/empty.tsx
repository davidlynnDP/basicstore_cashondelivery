import { useRouter } from 'next/router'

import { RootLayout } from '@/components/layouts/RootLayout'
import styles from '../../styles/EmptyPage.module.css'


const EmptyPage = () => {

    const router = useRouter(); 

  return (
    <RootLayout>

      <div className={ styles.ct_empty }>
        <h1 className={ styles.title }>Su carrito está vació</h1>
        <button onClick={ () => router.push('/') } className={ styles.btn_back }>Regresar</button>
      </div>
    
    </RootLayout>
  )
}


export default EmptyPage

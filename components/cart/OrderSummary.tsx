import { useContext } from 'react';
import { CartContext } from '@/context/cart';
import styles from './OrderSummary.module.css'
import { formatCurrency } from '@/utils';
import { useRouter } from 'next/router';


interface Props {
  cartInfo?: boolean
}


export const OrderSummary: React.FC<Props> = ({ cartInfo = false }) => {

    const router = useRouter();

    const { numberOfItems, total } = useContext( CartContext );
    
  return (
    <div className={ styles.ct_summary }>
      <h1 className={ styles.title }>Resumen de la orden</h1>

      <h2 className={ styles.items_n }>Número de ítems { numberOfItems }</h2>
      <h2 className={ styles.total }>Total { formatCurrency( total ) }</h2>

      <div className={ styles.ct_flex_pg }>
        {
          cartInfo
          ? (
            <>
              <p className={ styles.pg }>Somos tu fabricante directo, lo que significa que al comprar con nosotros, obtienes la máxima calidad al precio más asequible.</p>
              <p className={ styles.pg }>Eliminamos intermediarios para que puedas disfrutar de productos excepcionales a precios que no encontrarás en ningún otro lugar.</p>
            </>
          ) 
          : (
            <p className={ styles.pg }>Tu comodidad es nuestra prioridad, y estamos emocionados de ofrecerte la mejor experiencia de descanso a un precio que te hará sonreír.</p>
          )
        }
        <p className={ styles.pg_dark }>¡Completa tu compra ahora y descubre la diferencia de comprar directamente del fabricante!</p>
      </div>

      {
        cartInfo
        ? (
          <button className={ styles.btn_contact } onClick={ () => router.push('/checkout') }>Contactar con fabricante</button>
        ) : (
          <></>
        )
      }
    </div>
  )
}

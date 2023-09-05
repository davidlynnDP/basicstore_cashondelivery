import { useEffect } from 'react'
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { OrderSummary } from '@/components/cart';
import { Divider } from '@/components/ui';
import { formatCurrency } from '@/utils';

import styles from '../../styles/CheckoutPage.module.css'
import { useShoppingCart } from '@/hooks';


type FormData = {
    names: string,
    surnames: string,
    email: string,
    phone: string,
    paymentmethod: string,
}

const CheckoutPage = () => {
    
  const { uploadedData, cart, order } = useShoppingCart(); 
    const router = useRouter();

    const { register, handleSubmit, formState: { errors }, getValues } = useForm<FormData>({
        defaultValues: {
            names: '',
            surnames: '',
            email: '',
            phone: '',
            paymentmethod: '',
        }
     });


    useEffect(() => {
      if ( uploadedData && cart.length === 0 ){
        router.replace('/cart/empty');  
      }
    }, [ uploadedData, cart, router ])

    const formSubmit = ( data: FormData ) => {

      const names = getValues('names');
      const surnames = getValues('surnames');
      const email = getValues('email');
      const phone = getValues('phone');
      const paymentmethod = getValues('paymentmethod');

      const message = `
      ¡Hola! Estoy interesado/a en hacer un pedido:
      - Nombre: ${ names } ${ surnames }
      - Email: ${ email }
      - Teléfono: ${ phone }
      - Método de Pago: ${ paymentmethod }
      - Número de Items: *${ order.numberOfItems }*
      - Total: *${ formatCurrency( order.total ) }*

      Productos:
      ${ cart.map( ( product, index ) => `${ index + 1 }. ${ product.title } - *${ formatCurrency( product.price ) }*`).join('\n')}

      *¡Espero tu respuesta para finalizar mi compra!*
      `;
        
      const encodedMessage = encodeURIComponent( message );
      const whatsappLink = `https://wa.me/573223910794?text=${ encodedMessage }`;

      window.open( whatsappLink, '_blank');

      router.push('/thanks');
    }

  return (

    <div className={ styles.ct_checkout }>
        <OrderSummary />

        <Divider />
 
        <div className={ styles.ct_form }>
            <h2 className={ styles.pg_dark }>Información del Comprador - Datos de pago</h2>
            <h5 className={ styles.pg_info }>Todos los campos son requeridos</h5>

            <form className={ styles.form } onSubmit={ handleSubmit( formSubmit ) }>

                <label htmlFor="names" className={ styles.label }>{ !!errors.names?.message ? `${ errors.names?.message }` : `Nombres` }</label>
                <input 
                  type="text" 
                  id="names"
                  className={ styles.input }
                  { ...register('names', {
                    required: 'Este campo es requerido',
                  })}
                />

                <label htmlFor="surnames" className={ styles.label }>{ !!errors.surnames?.message ? `${ errors.surnames?.message }` : `Apellidos` }</label>
                <input 
                  type="text" 
                  id="surnames" 
                  className={ styles.input }
                  { ...register('surnames', {
                    required: 'Este campo es requerido'
                  })}
                />

                <label htmlFor="email" className={ styles.label }>{ !!errors.email?.message ? `${ errors.email?.message }` : `Correo Electrónico` }</label>
                <input 
                  type="email"
                  id="email"
                  className={ styles.input } 
                  { ...register('email', {
                    required: 'Este campo es requerido',
                  })}
                />

                <label htmlFor="phone" className={ styles.label }>{ !!errors.phone?.message ? `${ errors.phone?.message }` : `Teléfono` }</label>
                <input 
                  type="text" 
                  id="phone" 
                  className={ styles.input }
                  { ...register('phone', {
                    required: 'Este campo es requerido'
                  })}
                />
                
                <label htmlFor="paymentmethod" className={ styles.label }>{ !!errors.paymentmethod?.message ? `${ errors.paymentmethod?.message }` : `Método de pago` }</label>
                <select 
                  id="paymentmethod"  
                  className={ styles.input }
                  { ...register('paymentmethod', {
                    required: 'Este campo es requerido'
                  })}>
                    <option value="contraentrega" selected>Contra Entrega</option>
                </select>

                <input type="submit" value="Contacta con nosotros" className={ styles.submit }/>
            </form>
        </div>


    </div>

  )


}


export default CheckoutPage
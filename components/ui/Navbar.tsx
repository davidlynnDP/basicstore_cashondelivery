import { useRouter } from 'next/router'
import styles from './Navbar.module.css'
import { useContext } from 'react';
import { CartContext } from '@/context/cart';

export const Navbar = () => {

  const { push } = useRouter();
  const { cart } = useContext( CartContext );

  const navigateCart = () => {
    if ( cart.length === 0 ) {
      push('/cart/empty') 
      return;
    }

    push('/cart'); 
  }

  


  return (

    <header className={ styles.ct_nav }>
      <figure className={ styles.fg_logo } onClick={ () => push('/') }>
        <img src="/icons/logo.svg" alt="" className={ styles.img_logo } />
      </figure>

      {/* categorias */}
      <div className={ styles.ct_categories }>
        <button className={ styles.btn_category } onClick={ () => push('/mattresses') }>Colchones</button>
        <button className={ styles.btn_category } onClick={ () => push('/beds') }>Base Camas</button>
      </div>

      <div className={ styles.ct_funcs }>
        <figure className={ styles.fg_icon }>
          <img src="/icons/shopping-cart.svg" alt="Shopping cart icon" className={ styles.img_icon } onClick={ () => navigateCart() } />
        </figure> 
      </div>
    </header>
  )
}


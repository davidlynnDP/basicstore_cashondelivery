import { useContext, useState } from 'react';
import { useRouter } from 'next/router'

import styles from './Navbar.module.css'
import { CartContext } from '@/context/cart';
import { getBy } from '@/utils';
import { useShoppingCart } from '@/hooks';


export const Navbar = () => {

  const { push } = useRouter();
  const { cart } = useShoppingCart();
  const [ searchTerm, setSearchTerm ] = useState('');

  const navigateCart = () => {
    if ( cart.length === 0 ) {
      push('/cart/empty') 
      return;
    }

    push('/cart'); 
  }


  const onSearchTerm = () => {
    if( searchTerm.trim().length === 0 ) return; 
    push(`/search/${ getBy.validTermFn( searchTerm ) }`); 
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

        <input 
          type="text" 
          id='searchterm'
          placeholder='¿buscas algo específico?'
          onChange={  (e) => setSearchTerm( e.target.value ) } 
          onKeyDown={ (e) => e.key === 'Enter' ? onSearchTerm() : null }
          className={ styles.input }
        />

        <figure className={ styles.fg_icon }>
          <img src="/icons/shopping-cart.svg" alt="Shopping cart icon" className={ styles.img_icon } onClick={ () => navigateCart() } />
        </figure> 
      </div>
    </header>
  )
}


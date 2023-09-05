import React, { useContext } from "react"
import { ICartProduct } from "@/interfaces/cart"
import { ValidTypes } from "@/interfaces/products"

import styles from './ShoppingList.module.css'
import { formatCurrency } from '@/utils';
import { useRouter } from "next/router";
import { CartContext } from "@/context/cart";


interface Props {
    product: ICartProduct
}

export const ShoppingList: React.FC<Props> = ({ product }) => {

  const router = useRouter();
  const { removeCartProduct } = useContext( CartContext );

  const altType = ( type: ValidTypes ): 'Mattress'|'Bed' => {
      return type === 'mattresses' ? 'Mattress' : 'Bed';
  }

  const navigate = ( type: ValidTypes, slug: string ) => {
    const typing: ValidTypes = type === 'mattresses' ? 'mattresses' : 'beds';
    router.push(`/${ typing }/${ slug }`);
  }

  return (
    <div className={ styles.ct_flex_column }>

      <div className={ styles.ct_flex_row } onClick={ () => navigate( product.type, product.slug ) }>
        <figure className={ styles.ct_fg }>
          <img src={ product.image } alt={ `${ altType( product.type ) } image` } className={ styles.img }/>
        </figure>

        <div className={ styles.ct_info }>
          <h2 className={ styles.title }>{ product.title }</h2>
          <h3 className={ styles.price }>Precio Unitario: { formatCurrency( product.price ) }</h3>
          <p className={ styles.size }>{ product.size }</p>
          <p className={ styles.quantity }>Cantidad: { product.quantity }</p>
        </div>
      </div>

      <figure className={ styles.ct_delete }>
        <img src="/icons/delete.svg" alt="Delete icon" className={ styles.delete_ico } onClick={ () => removeCartProduct( product ) }/>
      </figure>

    </div>
  )
}

import React, { PropsWithChildren } from 'react'
import styles from './ProductContainer.module.css'


export const ProductContainer: React.FC<PropsWithChildren> = ({ children }) => {

  return (
    <div className={ styles.ct_product }>
      {
        children
      }
    </div>
  )
}

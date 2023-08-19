import { PropsWithChildren } from 'react'
import styles from './GridContainer.module.css'



export const GridContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={ styles.ct_container }>
      <div className={ styles.ct_grid }>

        {
          children
        }

      </div>
  </div>
  )
}

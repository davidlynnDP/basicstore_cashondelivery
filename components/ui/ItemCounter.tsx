
import styles from './ItemCounter.module.css'

const compoundCss = {
  btnReverse: `${ styles.btn } ${ styles.reverse }`
}

interface Props {
  currentValue: number;
  maxValue: number;

  updatedQuantity: (quantity: number) => void;
}
  

export const ItemCounter: React.FC<Props> = ({ currentValue, maxValue, updatedQuantity }) => {

    const addOrRemove = ( value: number ) => {
        if ( value === -1 ) {
          if ( currentValue === 1 ) return;  
    
          return updatedQuantity( currentValue - 1 );
        }
    
        if ( currentValue >= maxValue ) return;
        updatedQuantity( currentValue + 1 );
    }

  return (

    <div className={ styles.ct_quantity }>

      <p className={ styles.pg }>Cantidad</p>

      <div className={ styles.ct_btns }>
          <button className={ styles.btn } onClick={ () => addOrRemove(-1) }>-</button>
          <p className={ styles.quantity }>{ currentValue }</p>
          <button className={ compoundCss.btnReverse } onClick={ () => addOrRemove(+1) }>+</button>
      </div>

    </div>
    
  )
}

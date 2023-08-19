import { Product } from '@/interfaces/products'
import styles from './CardProduct.module.css'
import { useRouter } from 'next/router';


interface Props {
  product: Product,
}

type ValidTypes = 'mattresses'|'beds';



export const CardProduct: React.FC<Props> = ({ product }) => {

  
  const router = useRouter();

  const onClick = ( typeProduct: string ) => {

    const redirection: ValidTypes = typeProduct === 'mattresses' ? 'mattresses' : 'beds';
    router.push(`/${ redirection }/${ product.slug }`)
  }

  const { images, tags, title, description, type } = product;

  const limited = description.length > 125 ? `${ description[0].substring(0, 125) } ...` : description[0];

  return (
    <div className={ styles.card }>
      <figure className={ styles.fg_img }>
        <img src={ images[0] } alt={ title } className={ styles.img_prod }/>
      </figure>
      
      <div className={ styles.card_info }>
        <h2 className={ styles.pg_title }>{ title }</h2>
        <p className={ styles.pg_desc }>{ limited }</p>
        <ul className={ styles.ul_list }>
          {
            tags.map( tag => (
              <li key={ tag } className={ styles.tag }>{ tag }</li>
            ))
          }
        </ul>
        <button className={ styles.btn } onClick={ () => onClick( type ) }>Ver más</button>
      </div>
    </div>
  )
}

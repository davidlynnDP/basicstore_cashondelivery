import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import { useContext, useState } from 'react'

import { Product } from '@/interfaces'
import { formatCurrency, getBedBySlug } from '@/utils'
import { ResponsiveCarousel } from '@/components/carousel/ResponsiveCarousel'
import { ProductContainer } from '@/components/ui/ProductContainer'
import { ICartProduct } from '@/interfaces/cart'
import { CartContext } from '@/context/cart'
import { useRouter } from 'next/router'
import { beds } from '@/data'
import { RootLayout } from '@/components/layouts/RootLayout'

import styles from '../../styles/BedsAndMattressesBySlug.module.css'

interface Props {
  product: Product,
}
  

const BedsBySlugPage: NextPage<Props> = ({ product }) => {

    
    const router = useRouter();

    const { addProductToCart } = useContext( CartContext )

    const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>({
      id: product.id,
      image: product.images[0],
      price: product.price,
      size: product.sizes,  
      slug: product.slug,
      title: product.title,
      type: product.type,

      quantity: 1,
    })


    //* Despues se puede implementar
    const onUpdateQuantity = ( quantity: number ) => {
      setTempCartProduct( currentProduct => ({
        ...currentProduct,
        quantity
      }));
    }

    const onAddProduct = () => {

      addProductToCart( tempCartProduct );  
      router.push('/cart');   // instruccion para hacer la navegacion
    }

    return (

      <RootLayout>

        <ProductContainer>

            <ResponsiveCarousel images={ product.images }/>

            <div className={ styles.ct_info }>
                <div className={ styles.ct_desc }>
                    <h1 className={ styles.title }>{ product.title }</h1>
                    {
                        product.description.map( desc => (
                            <p key={ desc } className={ styles.description }>{ desc }</p>
                        ))
                    }
                    <div className={ styles.price }>{ formatCurrency( product.price ) }</div>
                    <div className={ styles.sizes }>{ product.sizes }</div>
                </div>

                <div className={ styles.ct_buy }>
                    <button className={ styles.btn_cart } onClick={ () => onAddProduct() }>Añadir al carrito</button>

                    <h2 className={ styles.title_small }>Características del producto</h2>
                    <ul className={ styles.list }>
                        {
                            product.aboutThisProduct.map( about => (
                                <li key={ about } className={ styles.tag }>{ about }</li>
                            ))
                        }
                    </ul>
                </div>
            </div>

        </ProductContainer>

      </RootLayout>
    )
}




export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const bedsSlug: string[] = beds.map( product => product.slug ); 

    return {
      paths: bedsSlug.map( slug => ({
        params: { slug }
      })),
      fallback: 'blocking'
    }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { slug } = params as { slug: string };
    const product = await getBedBySlug( slug );

    if ( !product ) {
        return {
          redirect: {
            destination: '/',
            permanent: false
          }
        }
      }
    
    return {
      props: {
          product
      }
    }
}

export default BedsBySlugPage
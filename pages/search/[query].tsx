import { RootLayout } from '@/components/layouts/RootLayout';
import { CardProduct, GridContainer } from '@/components/ui';
import { Product } from '@/interfaces';
import { getBy } from '@/utils';
import { GetServerSideProps, NextPage } from 'next';

import styles from '@/styles/SearchPage.module.css'


interface Props {
    products: Product[];
    foundProducts: boolean;
    query: string;
}

const SearchPage: NextPage<Props> = ({ products, foundProducts, query }) => {

  return (
    <RootLayout>

      <div className={ styles.ct_found }>
        {
          foundProducts
            ? <p className={ styles.pg_success }>¡Hemos encontrado productos relacionados a tu búsqueda!</p>
            : (
              <>
                <p className={ styles.pg_404 }>¿Buscas algo diferente?</p> 
                <p className={ styles.pg_404 }>Aquí tienes algunas sugerencias.</p>
              </>
            )
            
        }
      </div>

      <GridContainer>
        {
          products.map( product => (
            <CardProduct 
              key={ product.id }
              product={ product }
            />
          ))
        }
      </GridContainer>
      
    </RootLayout>
  )
}



export const getServerSideProps: GetServerSideProps = async({ params }) => {
    
    const { query = '' } = params as { query: string };

    if ( query.length === 0 ) {
        return {
            redirect: {
                destination: '/',
                permanent: true
            }
        }
    }

    let products = await getBy.getProductsByTerm( query );  
    const foundProducts = products.length > 0;  

    if ( !foundProducts ) {
        products = await getBy.getAllProducts();
    }

    return {
      props: {
        products,
        foundProducts,
        query
      }
    }
}


export default SearchPage
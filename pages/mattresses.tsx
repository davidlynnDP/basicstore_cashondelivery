import { GetStaticProps, NextPage } from 'next'
import { shuffle } from 'underscore';
import { v4 as uuid } from 'uuid';

import { RootLayout } from '@/components/layouts/RootLayout'
import { Product } from '@/interfaces'
import { CardProduct, GridContainer } from '@/components/ui';
import { gistApi } from '@/api';
import { mattresses } from '@/data';


interface Props {
  products: Product[]
}

const MattressesPage: NextPage<Props> = ({ products }) => {

  return (
    <RootLayout>

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

//Static Site Generation (SSG)
export const getStaticProps: GetStaticProps = async (ctx) => {

    //const { data } = await gistApi.get<Product[]>('/mattresses.json');
  
    const shuffleProducts = shuffle([ ...mattresses ]);
    const products: Product[] = shuffleProducts.map( product => ({
      id: uuid(),
      ...product
    }));
  
    return {
      props: {
        products
      }
    };
}

export default MattressesPage

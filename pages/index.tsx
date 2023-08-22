import { GetStaticProps, NextPage } from 'next'
import { shuffle } from 'underscore';

import { RootLayout } from '@/components/layouts/RootLayout'
import { Product } from '@/interfaces'
import { CardProduct, GridContainer } from '@/components/ui';
import { gistApi } from '@/api';
import { mattresses, beds } from '@/data';

interface Props {
  products: Product[]
}

const HomePage: NextPage<Props> = ({ products }) => {


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
  
  const shuffleProducts = shuffle([ ...mattresses, ...beds ]);

  return {
    props: {
      products: shuffleProducts
    }
  };
}

export default HomePage

import { useRouter } from 'next/router';
import styles from './ResponsiveCarousel.module.css'

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


interface Props {
   images: string[]
}

export const ResponsiveCarousel: React.FC<Props> = ({ images }) => {

    const { pathname } = useRouter();
    const altInfo = pathname.includes('mattresses') ? 'Mattress' : 'Bed';

    
  return (
    <div className={ styles.ct_carousel }>
      <Carousel
        infiniteLoop={ true }
        showIndicators={ false }
        showStatus={ false }
        thumbWidth={ 60 }
        className="productCarousel"
      >
        {
            images.map( image => (
                <img src={ image } alt={ `${ altInfo } image` } key={ image } />
            ))
        }
      </Carousel>
    </div>
  );
}

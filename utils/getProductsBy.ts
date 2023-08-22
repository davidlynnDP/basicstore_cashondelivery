import { beds, mattresses } from '@/data';
import { Product } from '@/interfaces';




const getBedBySlug = async( slug: string ): Promise<Product | null> => {

    const product = beds.find( product => product.slug === slug )

    if ( !product ) return null;

    return {
        ...product,
    };
}


const getMattressBySlug = async( slug: string ): Promise<Product | null> => {

    const product = mattresses.find( product => product.slug === slug )

    if ( !product ) return null;

    return {
        ...product,
    };
}


export {
    getBedBySlug,
    getMattressBySlug
}
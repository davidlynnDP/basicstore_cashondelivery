import { beds, mattresses } from '@/data';
import { Product } from '@/interfaces';
import { shuffle } from 'underscore';




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


const getProductsByTerm = async( term: string ): Promise<Product[]> => {
    
    const finishTerm = validTermFn( term ); 

    const allProducts = [ ...mattresses, ...beds ];
    return allProducts.filter( product => product.slug.includes( finishTerm ));
}


const getAllProducts = async(): Promise<Product[]> => {

    const allProducts = shuffle([ ...mattresses, ...beds ]);
    return allProducts.slice(0, 12);
}


const validTermFn = ( term: string ): string => {

    return term.toLowerCase().replaceAll(' ', '-');
}



export {
    getBedBySlug,
    getMattressBySlug,
    getProductsByTerm,
    getAllProducts,

    validTermFn
}
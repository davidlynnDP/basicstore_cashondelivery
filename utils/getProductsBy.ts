import { gistApi } from '@/api';
import { beds, mattresses } from '@/data';
import { Product } from '@/interfaces';
import { v4 as uuid } from 'uuid';




const getBedBySlug = async( slug: string ): Promise<Product | null> => {

    //const { data } = await gistApi.get<Product[]>('/beds.json');
    const product = beds.find( product => product.slug === slug )

    if ( !product ) return null;

    return {
        id: uuid(),
        ...product,
    };
}


//todo - manejar error de Axios
const getMattressBySlug = async( slug: string ): Promise<Product | null> => {

    //const { data } = await gistApi.get<Product[]>('/mattresses.json');
    const product = mattresses.find( product => product.slug === slug )

    if ( !product ) return null;

    return {
        id: uuid(),
        ...product,
    };
}


export {
    getBedBySlug,
    getMattressBySlug
}
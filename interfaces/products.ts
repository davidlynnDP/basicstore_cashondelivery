


export interface Product {
    id: string;
    description: string[];
    aboutThisProduct: string[];
    images: string[]; 
    //inStock: boolean;    // si tenemos o no productos en Stock
    price: number;      // precio unitario del producto pero este precio podria variar dependiendo del sizes: ValidSizes[]
    sizes: ValidSizes;    // hace referencia a las tallas
    slug: string;    // muy usados para que sea el url que se pone en las pages respectivas y de esta manera ayudar al SEO 
    tags: string[];   // usados para que cuando el usuario busque algo sean consultados los tags y podamos deducir si tenemos alguna palabra que coincida ahi
    title: string;    // titulo del producto
    type: ValidTypes;
}


export type ValidSizes = '100cm x 190cm'|'120cm x 190cm'|'140cm x 190cm'|'160cm x 190cm'|'200cm x 200cm';
export type ValidTypes = 'mattresses'|'beds';

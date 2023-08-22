import { shuffle } from "underscore"



export const bedsOnly: string[] = [
    "/images/beds/base1.webp",
    "/images/beds/base2.webp",
    "/images/beds/base3.webp",
    "/images/beds/base4.webp",
    "/images/beds/base5.webp",
    "/images/beds/base6.webp",
    "/images/beds/base7.webp",
    "/images/beds/base8.webp",
    "/images/beds/base9.webp",
    "/images/beds/base10.webp",
]

export const bedsCombo: string[] = [
    "/images/beds/base+cabecero1.webp",
    "/images/beds/base+cabecero2.webp",
    "/images/beds/base+cabecero3.webp",
    "/images/beds/base+cabecero4.webp",
    "/images/beds/base+cabecero5.webp",
    "/images/beds/base+cabecero6.webp",
    "/images/beds/base+cabecero7.webp",
    "/images/beds/base+cabecero8.webp",
    "/images/beds/base+cabecero9.webp",
    "/images/beds/base+cabecero10.webp",
]

export const whiteSemiOrthopedicMattresses: string[] = [
    "/images/mattresses/semi-blanco1.webp",
    "/images/mattresses/semi-blanco2.webp",
    "/images/mattresses/semi-blanco3.webp",
    "/images/mattresses/semi-blanco4.webp",
    "/images/mattresses/semi-blanco5.webp",
    "/images/mattresses/semi-blanco6.webp",
]

export const cassataClinicalMattresses: string[] = [
    "/images/mattresses/cassata1.webp",
    "/images/mattresses/cassata2.webp",
    "/images/mattresses/cassata3.webp",
    "/images/mattresses/cassata4.webp",
    "/images/mattresses/cassata5.webp",
    "/images/mattresses/cassata6.webp",
    "/images/mattresses/cassata7.webp",
    "/images/mattresses/cassata8.webp",
]

export const blackSemiOrthopedicMattresses: string[] = [
    "/images/mattresses/semi-negro1.webp",
    "/images/mattresses/semi-negro2.webp",
    "/images/mattresses/semi-negro3.webp",
    "/images/mattresses/semi-negro4.webp",
    "/images/mattresses/semi-negro5.webp",
    "/images/mattresses/semi-negro6.webp",
]

export const superPillowTopMattresses: string[] = [
    "/images/mattresses/super-pillow1.webp",
    "/images/mattresses/super-pillow2.webp",
    "/images/mattresses/super-pillow3.webp",
    "/images/mattresses/super-pillow4.webp",
    "/images/mattresses/super-pillow5.webp",
    "/images/mattresses/super-pillow6.webp",
    "/images/mattresses/super-pillow7.webp",
    "/images/mattresses/super-pillow8.webp",
    "/images/mattresses/super-pillow9.webp",
    "/images/mattresses/super-pillow10.webp",
    "/images/mattresses/super-pillow11.webp",
    "/images/mattresses/super-pillow12.webp",
    "/images/mattresses/super-pillow13.webp",
    "/images/mattresses/super-pillow14.webp",
    "/images/mattresses/super-pillow15.webp",
    "/images/mattresses/super-pillow16.webp",
]

export const premiumFoldingSuperPillowsMattresses: string[] = [
    "/images/mattresses/plegable1.webp",
    "/images/mattresses/plegable2.webp",
    "/images/mattresses/plegable3.webp",
    "/images/mattresses/plegable4.webp",
    "/images/mattresses/plegable5.webp",
]

export const shuffleImages = ( images: string[] ): string[] => {

    const shu = shuffle( images );
    return shu.slice(0, 5);
}


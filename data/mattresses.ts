import { Product } from '@/interfaces';
import { v4 as uuid } from 'uuid';
import { whiteSemiOrthopedicMattresses, blackSemiOrthopedicMattresses, cassataClinicalMattresses, superPillowTopMattresses, premiumFoldingSuperPillowsMattresses, shuffleImages } from './shuffleImages'


const mattresses: Product[] = [
    {
        "id": uuid(),
        "description": [
            "Experimenta el lujo del descanso con nuestro colchón semiortopédico. Diseñado para brindar soporte y confort incomparables, este colchón combina materiales de alta calidad con un precio accesible.",
            "La firmeza adaptable alivia tus tensiones mientras duermes plácidamente. No renuncies a la calidad ni a tu presupuesto. Descubre el secreto de un sueño renovador con nuestro colchón semiortopédico premium."
        ],
        "aboutThisProduct": [
            "Diseñado con capas de espuma de alta densidad",
            "Tela transpirable",
            "Durabilidad y comodidad sin igual",
            "Soporte óptimo para la columna vertebral",
            "Mantiene su forma y calidad durante años",
            "Diseñado para resistir la acumulación de ácaros y alérgenos",
            "Garantía de satisfacción"
        ],
        "images": shuffleImages( whiteSemiOrthopedicMattresses ),
        "price": 550000,
        "sizes": "100cm x 190cm",
        "slug": "colchon-sencillo-original-blanco-100cm-x-190cm-x-20cm",
        "tags": [
            "confort",
            "comodidad",
            "firmeza",
            "durabilidad",
            "calidad"
        ],
        "title": "Colchón Sencillo Original blanco - 100cm x 190cm x 20cm",
        "type": "mattresses"
    },
    {
        "id": uuid(),
        "description": [
            "Descansa como nunca antes con nuestro colchón semiortopédico de alta gama a un precio que te sorprenderá.",
            "Este colchón fusiona la suavidad y el soporte en una experiencia única. La tecnología de espuma de calidad y la firmeza equilibrada promueven una postura óptima. Duerme tranquilo sabiendo que has invertido en un descanso de calidad excepcional sin exceder tu presupuesto."
        ],
        "aboutThisProduct": [
            "Diseñado con capas de espuma de alta densidad",
            "Tela transpirable",
            "Durabilidad y comodidad sin igual",
            "Soporte óptimo para la columna vertebral",
            "Mantiene su forma y calidad durante años",
            "Diseñado para resistir la acumulación de ácaros y alérgenos",
            "Garantía de satisfacción"
        ],
        "images": shuffleImages( whiteSemiOrthopedicMattresses ),
        "price": 620000,
        "sizes": "120cm x 190cm",
        "slug": "colchon-semidoble-original-blanco-120cm-x-190cm-x-20cm",
        "tags": [
            "confort",
            "comodidad",
            "firmeza",
            "durabilidad",
            "calidad"
        ],
        "title": "Colchón Semidoble Original blanco - 120cm x 190cm x 20cm",
        "type": "mattresses"
    },
    {
        "id": uuid(),
        "description": [
            "Descubre el colchón semiortopédico perfecto para tu confort y bolsillo.",
            "Nuestra creación de calidad superior ofrece noches de sueño inigualables. La combinación de capas de espuma y diseño semiortopédico brindan soporte y comodidad al mejor precio.",
            "Libérate de tensiones y disfruta de la noche más relajante. Eleva tu descanso con este colchón que ofrece lujo sin comprometer tus finanzas."
        ],
        "aboutThisProduct": [
            "Diseñado con capas de espuma de alta densidad",
            "Tela transpirable",
            "Durabilidad y comodidad sin igual",
            "Soporte óptimo para la columna vertebral",
            "Mantiene su forma y calidad durante años",
            "Diseñado para resistir la acumulación de ácaros y alérgenos",
            "Garantía de satisfacción"
        ],
        "images": shuffleImages( whiteSemiOrthopedicMattresses ),
        "price": 680000,
        "sizes": "140cm x 190cm",
        "slug": "colchon-doble-original-blanco-140cm-x-190cm-x-20cm",
        "tags": [
            "confort",
            "comodidad",
            "firmeza",
            "durabilidad",
            "calidad"
        ],
        "title": "Colchón Doble Original blanco - 140cm x 190cm x 20cm",
        "type": "mattresses"
    },
    {
        "id": uuid(),
        "description": [
            "Descansa como nunca antes con nuestro colchón semiortopédico de alta gama a un precio que te sorprenderá. Este colchón fusiona la suavidad y el soporte en una experiencia única.",
            "Nuestra creación de calidad superior ofrece noches de sueño inigualables. La combinación de capas de espuma y diseño semiortopédico brindan soporte y comodidad al mejor precio.",
            "Descubre el secreto de un sueño renovador con nuestro colchón semiortopédico."
        ],
        "aboutThisProduct": [
            "Diseñado con capas de espuma de alta densidad",
            "Tela transpirable",
            "Durabilidad y comodidad sin igual",
            "Soporte óptimo para la columna vertebral",
            "Mantiene su forma y calidad durante años",
            "Diseñado para resistir la acumulación de ácaros y alérgenos",
            "Garantía de satisfacción"
        ],
        "images": shuffleImages( whiteSemiOrthopedicMattresses ),
        "price": 750000,
        "sizes": "160cm x 190cm",
        "slug": "colchon-queen-original-blanco-160cm-x-190cm-x-20cm",
        "tags": [
            "confort",
            "comodidad",
            "firmeza",
            "durabilidad",
            "calidad"
        ],
        "title": "Colchón Queen Original blanco - 160cm x 190cm x 20cm",
        "type": "mattresses"
    },
    {
        "id": uuid(),
        "description": [
            "Experimenta el lujo del descanso con nuestro colchón semiortopédico. Diseñado para brindar soporte y confort incomparables, este colchón combina materiales de alta calidad con un precio accesible.",
            "La firmeza adaptable alivia tus tensiones mientras duermes plácidamente. No renuncies a la calidad ni a tu presupuesto. Descubre el secreto de un sueño renovador con nuestro colchón semiortopédico premium."
        ],
        "aboutThisProduct": [
            "Diseñado con capas de espuma de alta densidad",
            "Tela transpirable",
            "Durabilidad y comodidad sin igual",
            "Soporte óptimo para la columna vertebral",
            "Mantiene su forma y calidad durante años",
            "Diseñado para resistir la acumulación de ácaros y alérgenos",
            "Garantía de satisfacción"
        ],
        "images": shuffleImages( blackSemiOrthopedicMattresses ),
        "price": 550000,
        "sizes": "100cm x 190cm",
        "slug": "colchon-sencillo-original-negro-100cm-x-190cm-x-20cm",
        "tags": [
            "confort",
            "comodidad",
            "firmeza",
            "durabilidad",
            "calidad"
        ],
        "title": "Colchón Sencillo Original Banda Negra - 100cm x 190cm x 20cm",
        "type": "mattresses"
    },
    {
        "id": uuid(),
        "description": [
            "Descansa como nunca antes con nuestro colchón semiortopédico de alta gama a un precio que te sorprenderá.",
            "Este colchón fusiona la suavidad y el soporte en una experiencia única. La tecnología de espuma de calidad y la firmeza equilibrada promueven una postura óptima. Duerme tranquilo sabiendo que has invertido en un descanso de calidad excepcional sin exceder tu presupuesto."
        ],
        "aboutThisProduct": [
            "Diseñado con capas de espuma de alta densidad",
            "Tela transpirable",
            "Durabilidad y comodidad sin igual",
            "Soporte óptimo para la columna vertebral",
            "Mantiene su forma y calidad durante años",
            "Diseñado para resistir la acumulación de ácaros y alérgenos",
            "Garantía de satisfacción"
        ],
        "images": shuffleImages( blackSemiOrthopedicMattresses ),
        "price": 620000,
        "sizes": "120cm x 190cm",
        "slug": "colchon-semidoble-original-negro-120cm-x-190cm-x-20cm",
        "tags": [
            "confort",
            "comodidad",
            "firmeza",
            "durabilidad",
            "calidad"
        ],
        "title": "Colchón Semidoble Original Banda Negra - 120cm x 190cm x 20cm",
        "type": "mattresses"
    },
    {
        "id": uuid(),
        "description": [
            "Descubre el colchón semiortopédico perfecto para tu confort y bolsillo.",
            "Nuestra creación de calidad superior ofrece noches de sueño inigualables. La combinación de capas de espuma y diseño semiortopédico brindan soporte y comodidad al mejor precio.",
            "Libérate de tensiones y disfruta de la noche más relajante. Eleva tu descanso con este colchón que ofrece lujo sin comprometer tus finanzas."
        ],
        "aboutThisProduct": [
            "Diseñado con capas de espuma de alta densidad",
            "Tela transpirable",
            "Durabilidad y comodidad sin igual",
            "Soporte óptimo para la columna vertebral",
            "Mantiene su forma y calidad durante años",
            "Diseñado para resistir la acumulación de ácaros y alérgenos",
            "Garantía de satisfacción"
        ],
        "images": shuffleImages( blackSemiOrthopedicMattresses ),
        "price": 680000,
        "sizes": "140cm x 190cm",
        "slug": "colchon-doble-original-negro-140cm-x-190cm-x-20cm",
        "tags": [
            "confort",
            "comodidad",
            "firmeza",
            "durabilidad",
            "calidad"
        ],
        "title": "Colchón Doble Original Banda Negra - 140cm x 190cm x 20cm",
        "type": "mattresses"
    },
    {
        "id": uuid(),
        "description": [
            "Descansa como nunca antes con nuestro colchón semiortopédico de alta gama a un precio que te sorprenderá. Este colchón fusiona la suavidad y el soporte en una experiencia única.",
            "Nuestra creación de calidad superior ofrece noches de sueño inigualables. La combinación de capas de espuma y diseño semiortopédico brindan soporte y comodidad al mejor precio.",
            "Descubre el secreto de un sueño renovador con nuestro colchón semiortopédico."
        ],
        "aboutThisProduct": [
            "Diseñado con capas de espuma de alta densidad",
            "Tela transpirable",
            "Durabilidad y comodidad sin igual",
            "Soporte óptimo para la columna vertebral",
            "Mantiene su forma y calidad durante años",
            "Diseñado para resistir la acumulación de ácaros y alérgenos",
            "Garantía de satisfacción"
        ],
        "images": shuffleImages( blackSemiOrthopedicMattresses ),
        "price": 750000,
        "sizes": "160cm x 190cm",
        "slug": "colchon-queen-original-negro-160cm-x-190cm-x-20cm",
        "tags": [
            "confort",
            "comodidad",
            "firmeza",
            "durabilidad",
            "calidad"
        ],
        "title": "Colchón Queen Original Banda Negra - 160cm x 190cm x 20cm",
        "type": "mattresses"
    },
    {
        "id": uuid(),
        "description": [
            "Experimenta la sensación de dormir en las nubes con nuestro Colchón Cassata.",
            "Diseñado meticulosamente para brindarte un confort inigualable, cada noche será un descanso reparador que te revitalizará para enfrentar cada día con energía renovada."
        ],
        "aboutThisProduct": [
            "Capa Superior de Espuma de Alta Densidad",
            "Postura adecuada durante el sueño",
            "Alivia la presión en las articulaciones",
            "El colchón minimiza la transferencia de movimiento",
            "Garantía de devolución del dinero",
            "Garantía extendida que cubre el colchón contra defectos de fabricación",
            "Núcleo de Espuma de Soporte de Alta Resiliencia"
        ],
        "images": shuffleImages( cassataClinicalMattresses ),
        "price": 980000,
        "sizes": "100cm x 190cm",
        "slug": "colchon-sencillo-cassata-100cm-x-190cm-x-20cm",
        "tags": [
            "ergonomico",
            "premium",
            "hipoalergenico",
            "durabilidad",
            "transpirable",
            "confort"
        ],
        "title": "Colchón Sencillo Cassata - 100cm x 190cm x 20cm",
        "type": "mattresses"
    },
    {
        "id": uuid(),
        "description": [
            "Nuestro Colchón Cassata es la culminación de la ingeniería de precisión y la artesanía experta.",
            "Disfruta de un soporte ergonómico que se adapta a la forma de tu cuerpo, aliviando los puntos de presión, mientras te acunas en una capa de suavidad que te envuelve en un abrazo reconfortante."
        ],
        "aboutThisProduct": [
            "Capa Superior de Espuma de Alta Densidad",
            "Postura adecuada durante el sueño",
            "Alivia la presión en las articulaciones",
            "El colchón minimiza la transferencia de movimiento",
            "Garantía de devolución del dinero",
            "Garantía extendida que cubre el colchón contra defectos de fabricación",
            "Núcleo de Espuma de Soporte de Alta Resiliencia"
        ],
        "images": shuffleImages( cassataClinicalMattresses ),
        "price": 1050000,
        "sizes": "120cm x 190cm",
        "slug": "colchon-semidoble-cassata-120cm-x-190cm-x-20cm",
        "tags": [
            "ergonomico",
            "premium",
            "hipoalergenico",
            "durabilidad",
            "transpirable",
            "confort"
        ],
        "title": "Colchón Semidoble Cassata - 120cm x 190cm x 20cm",
        "type": "mattresses"
    },
    {
        "id": uuid(),
        "description": [
            "El Colchón Cassata no solo te ofrece una noche de sueño excepcional, sino que también está construido para durar.",
            "Los materiales de alta calidad y la fabricación experta garantizan que disfrutarás de este colchón durante años, manteniendo su forma y rendimiento como el primer día."
        ],
        "aboutThisProduct": [
            "Capa Superior de Espuma de Alta Densidad",
            "Postura adecuada durante el sueño",
            "Alivia la presión en las articulaciones",
            "El colchón minimiza la transferencia de movimiento",
            "Garantía de devolución del dinero",
            "Garantía extendida que cubre el colchón contra defectos de fabricación",
            "Núcleo de Espuma de Soporte de Alta Resiliencia"
        ],
        "images": shuffleImages( cassataClinicalMattresses ),
        "price": 1250000,
        "sizes": "140cm x 190cm",
        "slug": "colchon-doble-cassata-140cm-x-190cm-x-20cm",
        "tags": [
            "ergonomico",
            "premium",
            "hipoalergenico",
            "durabilidad",
            "transpirable",
            "confort"
        ],
        "title": "Colchón Doble Cassata - 140cm x 190cm x 20cm",
        "type": "mattresses"
    },
    {
        "id": uuid(),
        "description": [
            "En nuestra tienda en línea, creemos que el lujo no debería ser inalcanzable.",
            "Por eso, ofrecemos el Colchón Cassata al mejor precio del mercado sin comprometer la calidad.",
            "Disfruta de la opulencia y el confort que mereces, sin romper tu presupuesto."
        ],
        "aboutThisProduct": [
            "Capa Superior de Espuma de Alta Densidad",
            "Postura adecuada durante el sueño",
            "Alivia la presión en las articulaciones",
            "El colchón minimiza la transferencia de movimiento",
            "Garantía de devolución del dinero",
            "Garantía extendida que cubre el colchón contra defectos de fabricación",
            "Núcleo de Espuma de Soporte de Alta Resiliencia"
        ],
        "images": shuffleImages( cassataClinicalMattresses ),
        "price": 1580000,
        "sizes": "160cm x 190cm",
        "slug": "colchon-queen-cassata-160cm-x-190cm-x-20cm",
        "tags": [
            "ergonomico",
            "premium",
            "hipoalergenico",
            "durabilidad",
            "transpirable",
            "confort"
        ],
        "title": "Colchón Queen Cassata - 160cm x 190cm x 20cm",
        "type": "mattresses"
    },
    {
        "id": uuid(),
        "description": [
            "Descubre el máximo confort con nuestro Colchón Super Pillow de calidad premium.",
            "Experimenta una capa extra de acolchado que abraza tu cuerpo, brindando una sensación de lujo. Fabricado con materiales de alta calidad, este colchón ofrece un soporte ergonómico que alivia tensiones y mejora la postura.",
            "ETodo esto a un precio sorprendentemente accesible. Duerme plácidamente y despierta renovado."
        ],
        "aboutThisProduct": [
            "Diseñado con capas de espuma de alta densidad",
            "Tela transpirable",
            "Durabilidad y comodidad sin igual",
            "Soporte óptimo para la columna vertebral",
            "Mantiene su forma y calidad durante años",
            "Diseñado para resistir la acumulación de ácaros y alérgenos",
            "Garantía de satisfacción"
        ],
        "images": shuffleImages( superPillowTopMattresses ),
        "price": 980000,
        "sizes": "100cm x 190cm",
        "slug": "colchon-sencillo-super-pillow-100cm-x-190cm-x-30cm",
        "tags": [
            "confort",
            "garantia",
            "viscoelastica",
            "acolchado",
            "comodidad",
            "calidad"
        ],
        "title": "Colchón Sencillo Super Pillow - 100cm x 190cm x 30cm",
        "type": "mattresses"
    },
    {
        "id": uuid(),
        "description": [
            "Sumérgete en la suavidad y comodidad con nuestro Colchón Super Pillow.",
            "La capa acolchada adicional te envuelve en un abrazo de lujo, mientras que el soporte firme cuida de tu bienestar.",
            "Diseñado con materiales de primera calidad, este colchón ofrece la combinación perfecta de confort y precio accesible. Experimenta el sueño rejuvenecedor que mereces."
        ],
        "aboutThisProduct": [
            "Diseñado con capas de espuma de alta densidad",
            "Tela transpirable",
            "Durabilidad y comodidad sin igual",
            "Soporte óptimo para la columna vertebral",
            "Mantiene su forma y calidad durante años",
            "Diseñado para resistir la acumulación de ácaros y alérgenos",
            "Garantía de satisfacción"
        ],
        "images": shuffleImages( superPillowTopMattresses ),
        "price": 1050000,
        "sizes": "120cm x 190cm",
        "slug": "colchon-semidoble-super-pillow-120cm-x-190cm-x-30cm",
        "tags": [
            "confort",
            "garantia",
            "viscoelastica",
            "acolchado",
            "comodidad",
            "calidad"
        ],
        "title": "Colchón Semidoble Super Pillow - 120cm x 190cm x 30cm",
        "type": "mattresses"
    },
    {
        "id": uuid(),
        "description": [
            "Eleva tu descanso con nuestro Colchón Super Pillow de máxima calidad.",
            "La capa extra de acolchado proporciona un confort excepcional, mientras que la tecnología de soporte ergonómico mejora tu postura y alivia tensiones.",
            "Fabricado con materiales premium, este colchón redefine el lujo asequible para tu dormitorio. No sacrifiques la calidad por el precio."
        ],
        "aboutThisProduct": [
            "Diseñado con capas de espuma de alta densidad",
            "Tela transpirable",
            "Durabilidad y comodidad sin igual",
            "Soporte óptimo para la columna vertebral",
            "Mantiene su forma y calidad durante años",
            "Diseñado para resistir la acumulación de ácaros y alérgenos",
            "Garantía de satisfacción"
        ],
        "images": shuffleImages( superPillowTopMattresses ),
        "price": 1150000,
        "sizes": "140cm x 190cm",
        "slug": "colchon-doble-super-pillow-140cm-x-190cm-x-30cm",
        "tags": [
            "confort",
            "garantia",
            "viscoelastica",
            "acolchado",
            "comodidad",
            "calidad"
        ],
        "title": "Colchón Doble Super Pillow - 140cm x 190cm x 30cm",
        "type": "mattresses"
    },
    {
        "id": uuid(),
        "description": [
            "Duerme en las nubes con nuestro Colchón Super Pillow premium a un precio que te sorprenderá.",
            "La capa adicional de acolchado ofrece una experiencia de descanso sin igual, mientras que el soporte firme cuida de tu salud postural. Con materiales de alta gama, este colchón te brinda confort de élite a un precio asequible.",
            "Tu sueño renovador comienza aquí."
        ],
        "aboutThisProduct": [
            "Diseñado con capas de espuma de alta densidad",
            "Tela transpirable",
            "Durabilidad y comodidad sin igual",
            "Soporte óptimo para la columna vertebral",
            "Mantiene su forma y calidad durante años",
            "Diseñado para resistir la acumulación de ácaros y alérgenos",
            "Garantía de satisfacción"
        ],
        "images": shuffleImages( superPillowTopMattresses ),
        "price": 1320000,
        "sizes": "160cm x 190cm",
        "slug": "colchon-queen-super-pillow-160cm-x-190cm-x-30cm",
        "tags": [
            "confort",
            "garantia",
            "viscoelastica",
            "acolchado",
            "comodidad",
            "calidad"
        ],
        "title": "Colchón Queen Super Pillow - 160cm x 190cm x 30cm",
        "type": "mattresses"
    },
    {
        "id": uuid(),
        "description": [
            "Despliega el confort excepcional con nuestro Colchón Super Pillow plegable, la joya de nuestra colección.",
            "Este colchón en forma de libro combina la suavidad de la capa acolchada con la practicidad de la portabilidad.",
            "Materiales de primera calidad y soporte ergonómico se unen para brindarte noches de sueño revitalizante. Vive la comodidad y la elegancia, sin renunciar al precio accesible."
        ],
        "aboutThisProduct": [
            "Diseñado con capas de espuma de alta densidad",
            "Tela transpirable",
            "Durabilidad y comodidad sin igual",
            "Soporte óptimo para la columna vertebral",
            "Mantiene su forma y calidad durante años",
            "Diseñado para resistir la acumulación de ácaros y alérgenos",
            "Garantía de satisfacción"
        ],
        "images": shuffleImages( premiumFoldingSuperPillowsMattresses ),
        "price": 2850000,
        "sizes": "200cm x 200cm",
        "slug": "colchon-king-super-pillow-plegable-200cm-x-200cm-x-30cm",
        "tags": [
            "lujo",
            "confort",
            "satisfaccion",
            "calidad",
            "garantia",
            "portabilidad"
        ],
        "title": "Colchón King Super Pillow Plegable - 200cm x 200cm x 30cm",
        "type": "mattresses"
    }
]

export default mattresses
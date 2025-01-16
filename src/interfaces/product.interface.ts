// export interface Product {                               //Interfaz de productos de prueba
//     description: string;
//     images: string[];
//     inStock: number;
//     price: number;
//     sizes: Size[];
//     slug: string;
//     tags: string[];
//     title: string;
//     type: Type;
//     gender: Category;
// }

export interface Product {                               //Interfaz de productos ya con id generado de la db.
    id: string;
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: Size[];
    slug: string;
    tags: string[];
    title: string;
    //type: Type;
    gender: Category;
}

export type DraftProduct = Omit<Product, "id">              

export interface CartProduct {
    id: string;
    slug: string;
    title: string;
    price: number;
    size: Size;
    quantity: number;
    image: string;
}


export type Category = 'men'|'women'|'kid'|'unisex';
export type Size = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
export type Type = 'shirts'|'pants'|'hoodies'|'hats';
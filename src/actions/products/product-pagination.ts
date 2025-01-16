'use server'

import { prisma } from "@/lib/prisma"
import { Gender } from "@prisma/client";


interface PaginationOptions {
    page?: number;                  //Pagina actual
    take?: number;                  //Cuantos elementos quiero mostrar por paginas.
    gender?: Gender;
}

export const getPaginatedProductWithImage = async({ page= 1, take= 12, gender }: PaginationOptions) => {

    if( isNaN( Number(page) ) ) page = 1;     //En el url pueden mandar cualquier cosa, esto sirve como validacion.
    if( page < 1 ) page = 1;


    try {
        
        // 1.- Obtener los productos
        const products = await prisma.product.findMany({        //Traeremos todos los productos
            take: take,
            skip: ( page - 1 ) * take,
            include: {
                ProductImage: {
                    take: 2,                   //Como el producto puede tener asociadas muchas imagenes, que solo agarre 2.
                    select: {                  //Que de la tabla ProductImage se traiga el url de las imagenes.
                        url: true
                    }
                }
            },
            where: {                           //Filtro por genero, puede o no venir es opcional.
                gender: gender
            }
        })


        //2.- Obtener el total de paginas.
        //const totalCount = await prisma.product.count({});                            //Total de productos, sin ningun filtro.
        const totalCount = await prisma.product.count({ where: { gender: gender } });   //Total de productos tomando en cuenta el filtro por genero.
        const totalPages = Math.ceil( totalCount / take );


        const mappedProducts = products.map( p => ({
            ...p,
            images: p.ProductImage.map( image => image.url )
        }));



        return {
            currentPage: page,
            totalPages: totalPages,
            products: mappedProducts
        };

    } catch (error) {
        throw new Error(`Error al cargar los productos. ${ error }`); 
    }
}
'use server'

import { prisma } from "@/lib/prisma";

export const getProductBySlug = async( slug: string ) => {
    try {
        
        const product = await prisma.product.findFirst({
            include: {
                ProductImage: {      //Incluye la relacion con ProductImage, trayendo todas las imagenes relacionadas y seleccionando el campo de url.
                    select: {
                        url: true
                    }
                }
            },
            where: {
                slug: slug          //Donde el slug del producto sea el que se manda por argumento aqui.
            }
        })

        if( !product ) return null;


        /*
            Aqui abajo vamos a devolver un campo en la respuesta llamado images en donde estara nuestro arreglo de imagenes,
            en product tenemos un campo llamado ProductImage que nos ayuda a traer las imagenes pero ya no seria necesario
            regresarlo ya que seria lo mismo con images. para quitar ese campo tu puedes hacer lo siguiente:
            
            const { ProductImage, ...rest } = product;

            y ya aqui abajo en ves de regresar ...product, regresarias ...rest y asi excluimos ese campo.
        */
        return {
            ...product,
            images: product.ProductImage.map( image => image.url )
        }
         
    } catch (error) {
        console.log( error )
        throw new Error('Error al obtener producto por slug.');
    }
} 
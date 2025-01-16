'use server'

import { prisma } from "@/lib/prisma";
import { sleep } from "@/utils";


export const getStockBySlug = async( slug: string ): Promise<number> => {
    try {

        await sleep( 2 );

        /*
            - Busca un producto en donde su slug sea igual al slug que le mando por parametro a esta funcion.
            - Despues solo seleccioname el campo inStock, de tal manera que solo me regreses ese campo y no todos.
        */
        const stock = await prisma.product.findFirst({
            where: { 
                slug: slug
            },
            select: {
                inStock: true
            }
        })

        return stock?.inStock ?? 0;
        
    } catch (error) {
        return 0;                       //Al haber un error retornaré 0 para que el usuario no pueda comprar el producto.
    }
}
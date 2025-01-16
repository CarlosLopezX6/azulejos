'use client'

import { useEffect, useState } from "react"
import { getStockBySlug } from "@/actions"
import { titleFont } from "@/config/fonts"

import { initialData } from "@/seed/seed"
const products = initialData.products;

interface Props {
    slug: string
}

export const StockLabel = ({ slug }: Props) => {

    const [stock, setStock] = useState(0);
    const [isLoading, setIsLoading] = useState(true);


    const getStock = async() => {
        //const inStock = await getStockBySlug( slug );
        const product = products.find(p => p.slug === slug);
        const inStock = product ? product.inStock : 0;

        setStock( inStock );
        setIsLoading( false );
    }


    useEffect(() => {
        getStock()
    }, [])
    

    return (
        <>
            {
                isLoading 
                    ? (
                        <h1 className={`${ titleFont.className } antialiased font-bold text-lg bg-gray-200 animate-pulse`}>
                            &nbsp;
                        </h1>
                    )
                    : (
                        <h1 className={`${ titleFont.className } antialiased font-bold text-lg`}>
                            Stock: { stock }
                        </h1>
                    )
            }
        </>
    )
}

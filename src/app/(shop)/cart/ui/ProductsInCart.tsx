'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { QuantitySelector } from "@/components";
import { useCartStore } from "@/store"


export const ProductsInCart = () => {

    const productsInCart = useCartStore( state => state.cart );
    const updateProductQuantity = useCartStore( state => state.updateProductQuantity );
    const removeProduct = useCartStore( state => state.removeProduct );


    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setLoaded( true );
    }, [])

    
    if( !loaded ) return <p>Loading...</p>


    return (
        <>
            {
                productsInCart.map( product => (

                <div key={`${product.slug} - ${product.size}`} className="flex mb-5">  {/* El identificador asi es porque puede haber un producto con ese slug pero diferente talla. */}

                    <Image
                        src={`/products/${ product.image }`}
                        width={ 100 }
                        height={ 100 }
                        style={{ width: "100px", height: "100px" }}
                        alt={ product.title }
                        className="mr-5 rounded"
                    />

                    <div>
                        <Link
                            href={`/product/${ product.slug }`}
                            className="hover:underline cursor-pointer" 
                        >
                            { product.size } | { product.title }
                        </Link>

                        <p>${ product.price }</p>

                        <QuantitySelector 
                            quantity={ product.quantity }
                            onQuantityChanged={ valueQuantity => updateProductQuantity( product, valueQuantity ) }
                        />

                        <button onClick={ () => removeProduct( product ) } className="underline mt-3">
                            Remover
                        </button>
                    </div>

                </div>
                ))
            }
        </>
    )
}

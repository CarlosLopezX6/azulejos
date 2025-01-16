'use client'

import { useState } from "react";
import { useCartStore } from "@/store";
import { QuantitySelector, SizeSelector } from "@/components"
import type { CartProduct, Product, Size } from "@/interfaces"

/*
    Este componente se creo adentro de la carpeta [slug] y no en componentes porque no se va a reutilizar, solo lo
    usaremos aqui.
*/


interface Props {
    product: Product;
}

export const AddToCart = ({ product }: Props) => {

    const addProductToCart = useCartStore( state => state.addProductToCart );

    const [selectedSize, setSelectedSize] = useState<Size | undefined>();
    const [quantity, setQuantity] = useState<number>(1);
    const [posted, setPosted] = useState<boolean>(false);


    const addToCart = () => {
        setPosted( true );

        if( !selectedSize ) return;

        const cartProduct: CartProduct = {
            id: product.id,
            slug: product.slug,
            title: product.title,
            price: product.price,
            size: selectedSize,
            quantity: quantity,
            image: product.images[0]
        };

        addProductToCart( cartProduct );

        setPosted( false );
        setSelectedSize( undefined );
        setQuantity( 1 );
    }


    return (
        <>
            {
                posted && !selectedSize && (
                    <span className="mt-2 text-red-500 fade-in">* Debe de seleccionar una talla.</span>
                )
            }

            {/* Selector de Tallas */}
            <SizeSelector 
                selectedSize={ selectedSize } 
                availableSizes={ product.sizes } 
                onSizeChanged={ setSelectedSize }
            />

            {/* Selector de Cantidad */}
            <QuantitySelector 
                quantity={ quantity }
                onQuantityChanged={ setQuantity }
            />

            <button
                onClick={ addToCart } 
                className="btn-primary my-5">
                Agregar al carrito
            </button>
        </>
    )
}

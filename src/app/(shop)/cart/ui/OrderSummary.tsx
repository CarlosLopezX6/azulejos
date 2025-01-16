'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useShallow } from "zustand/shallow";
import { useCartStore } from "@/store"
import { currencyFormat } from "@/utils";


export const OrderSummary = () => {
    
    /*
        Segun la documentacion de next, redirect deberia ser usado en server components, 
        server actions o event handlers, es decir todo lo que ocurra en el servidor. 
        Tambien se puede usar en el cliente pero next recomienda usar mejor el useRouter que esta 
        pensado exclusivamente para la navegacion en el cliente.
    */
    const router = useRouter();

    /*
        Para mas info sobre esto de shallow y la comparacion de objetos, revisa el proyecto de javascript-quiz. en el App.
    */
    //PRIMER SOLUCION A SHALLOW DE OBJETOS EN ZUSTAND   Docu:  https://zustand.docs.pmnd.rs/migrations/migrating-to-v5#requiring-stable-selector-outputs
    // const {  
    //     subTotal,
    //     tax,
    //     total,
    //     itemsInCart
    // } = useCartStore( useShallow(( state => state.getSummaryInformation() )) );

    //SEGUNDA SOLUCION A SHALLOW DE OBJETOS EN ZUSTAND
    const { getSummaryInformation } = useCartStore();
    const { itemsInCart, subTotal, tax, total } = getSummaryInformation();


    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setLoaded( true );
    }, [])


    useEffect(() => {

        if( itemsInCart === 0 && loaded === true ){
          router.replace('/empty-cart')
        }

    },[ itemsInCart, loaded ])
        
    
    if( !loaded ) return <p>Loading...</p>


    return (
       <div className="grid grid-cols-2">
            <span>No. Productos</span>
            <span className="text-right">{ itemsInCart == 1 ? '1 artículo' : `${ itemsInCart } artículos` }</span>

            <span>Subtotal</span>
            <span className="text-right">{ currencyFormat( subTotal ) }</span>

            <span>Impuestos (15%)</span>
            <span className="text-right">{ currencyFormat( tax ) }</span>

            <span className="mt-5 text-2xl">Total:</span>
            <span className="mt-5 text-2xl text-right">{ currencyFormat( total ) }</span>
        </div>
    )
}

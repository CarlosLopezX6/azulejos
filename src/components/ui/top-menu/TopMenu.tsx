'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link'
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5'
import { useCartStore, useUiStore } from '@/store';
import Image from 'next/image';


export const TopMenu = () => {

    const totalItemsInCart = useCartStore( state => state.getTotalItems() );   //Ejecuto la funcion directamente aqui.
    const openMenu  = useUiStore( state => state.openSideMenu );

    const [loaded, setLoaded] = useState(false);   //Segunda solución al problema de hidratación.

    /*
        Cuando estemos usando Zustand + Next y asu vez usando persist, tendremos un problema, aparentemente todo funcionara
        bien pero muy pronto cuando queramos usar el persist de los datos ( recargando la pagina ) nos arrojará un error
        que nos dirá que el estado inicial de la aplicacion no hace match con lo que renderizo el servidor, imaginate
        que el cliente tiene 15 elementos en el carrito de compras y ya estan en el localStorage etc., Ahora
        lo que genera el servidor son 0 elementos por lo que ahi hay un problema de match y tiene que ver con la hydratacion.
        Para resolver el problema que tenemos con Next + Zustand sobre hidratacion usando el persist 
        lo podriamos hacer de 2 formas, deje la segunda porque es la manual y con la que se hizo el curso pero la primera
        me gusto mas la verdad, es menos codigo. ACTUALIZACION: ahora encuentro mas practica la segunda solucion :D :

        1.- Forma en la documentacion de Zustand 
        https://zustand.docs.pmnd.rs/integrations/persisting-store-data#skiphydration.
        En la store en cuestion debemos de poner como argumento en el persist   skipHydration: true  y despues
        utilizar la opcion de rehydrate() cuando se cargue el componente de esta manera:

        useEffect(() => {
            useCartStore.persist.rehydrate();
        }, [])

        y ya.

        2.- Esperando a que ya tengamos los productos en el cart, hacemos un proceso en el lado del cliente.
        Ponemos un estado que nos indica si ya se cargo el componente y despues, dependiendo de ese estado mostraremos 
        los items (esto garantiza que el número en el carrito se actualice correctamente después de la renderización inicial.), 
        eso hara que al principio tengamos exactamente lo mismo que viene del servidor, Next sabe que
        todo lo que viene despues es generado del lado del cliente. Obviamente para esta solucion NO DEBES usar lo
        de la pasada solucion, osea, no debes poner el skipHydration: true en la store ni poner rehydrate() en el useEffect.

        const [loaded, setLoaded] = useState(false);

        useEffect(() => {
            setLoaded( true );                     
        }, [])

        ( loaded && totalItemsInCart > 0 )
    */

    useEffect(() => {
        //useCartStore.persist.rehydrate();     //Primera solución al problema de hidratación, revisar tambien useCartStore.
        setLoaded( true );                      //Segunda solución al problema de hidratación.
    }, [])      
    

    return (
        <nav className='flex px-5 py-4 justify-between items-center w-full h-full'>

            {/* LOGO */}
            <div>
                <Link href='/'>
                    <Image
                        width={ 250 }
                        height={ 150 }
                        src='/imgs/navbar-logo.webp'
                        alt='logo'
                    />
                </Link>
            </div>

            {/* Center Menu */}
            <div className='hidden sm:block'>
                <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' href='/gender/men'>Interior</Link>
                <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' href='/gender/women'>Exterior</Link>
                <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' href='/gender/kid'>Baño</Link>
            </div>

            {/* Search Cart Menu */}
            <div className='flex items-center'>

                <Link href='/search' className='mx-2'> 
                    <IoSearchOutline className="size-5"/> 
                </Link>

                <Link 
                    href={ loaded && ( totalItemsInCart === 0 ) ? '/empty-cart' : '/cart' }
                    className='mx-2'
                >
                    <div className='relative'>
                        {
                            // ( totalItemsInCart > 0 )
                            ( loaded && ( totalItemsInCart > 0 ) )          //Segunda solución al problema de hidratación.
                                && (
                                    <span className='fade-in absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white'>
                                        { totalItemsInCart }
                                    </span>
                                )
                        }
                        <IoCartOutline className="size-5"/>
                    </div>
                </Link>

                <button onClick={ openMenu } className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'>
                    Menú
                </button>

            </div>

        </nav>
    )
}

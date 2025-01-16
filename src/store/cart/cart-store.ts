import { create } from "zustand";
import type { CartProduct } from "@/interfaces";
import { persist } from "zustand/middleware";



interface State {
    cart: CartProduct[];

    addProductToCart: ( product: CartProduct ) => void;
    getSummaryInformation: () => {
        subTotal: number;
        tax: number;
        total: number;
        itemsInCart: number;
    }
    getTotalItems: () => number;
    updateProductQuantity: ( product: CartProduct, quantity: number ) => void;
    removeProduct: ( product: CartProduct ) => void;
}

export const useCartStore = create<State>()(
    persist(


        (set, get) => ({
        
            //State
            cart: [],
    
    
            //Methods
            addProductToCart: ( product: CartProduct ) => {
    
                const { cart } = get();
    
                // 1.- Revisar si el producto existe en el carrito con la talla seleccionada.
                const productInCart = cart.some( p => p.id === product.id && p.size === product.size );
    
                if( !productInCart ) {
                    set({
                        cart: [ ...cart, product ]
                    })
                    return;
                }
    
                //2.- Se que el producto existe por talla, entonces incrementalo.
                const updatedCartProducts = cart.map( p => 
                    p.id === product.id && p.size === product.size
                        ? { ...p, quantity: p.quantity + product.quantity }
                        : p
                )
    
                set({
                    cart: updatedCartProducts
                });

            },

            getTotalItems: () => {

                const { cart } = get();

                return cart.reduce( (total, p) => total + p.quantity, 0 );

            },

            getSummaryInformation: () => {

                const { cart, getTotalItems } = get();   //tambien puedes reutilizar funciones de este mismo store.

                const subTotal = cart.reduce( (subtotal, p) => p.quantity * p.price + subtotal, 0 );

                const tax = subTotal * 0.15;
                const total = subTotal + tax;

                //const itemsInCart = cart.reduce( (total, p) => total + p.quantity, 0 );
                const itemsInCart = getTotalItems();

                return {
                    subTotal,
                    tax,
                    total,
                    itemsInCart
                }

            },

            updateProductQuantity: ( product: CartProduct, quantity: number ) => {

                const { cart } = get();

                const updatedCartProducts = cart.map( p => 
                    p.id === product.id && p.size === product.size
                        ? { ...p, quantity: quantity }
                        : p
                )
    
                set({
                    cart: updatedCartProducts
                });

            },

            removeProduct: ( product: CartProduct ) => {

                const { cart } = get();

                const updatedCartProducts = cart.filter( p => p.id !== product.id || p.size !== product.size );

                set({
                    cart: updatedCartProducts
                });

            }
    
        })


        ,{
            name: 'azulejos-shopping-cart',
            //skipHydration: true
        }
    )
)
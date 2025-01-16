//export const revalidate = 10;             //revalidacion de data cada 6 segundos;
import { unstable_cache } from "next/cache";

import { getProductBySlug } from "@/actions";
import { ProductMobileSlideshow, ProductSlideshow, QuantitySelector, SizeSelector, StockLabel } from "@/components";
import { titleFont } from "@/config/fonts";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import { AddToCart } from "./ui/AddToCart";


import { initialData } from "@/seed/seed";


interface Props {
  params: Promise<{ slug: string }>;
}


export async function generateMetadata({ params }: Props, parent: ResolvingMetadata ): Promise<Metadata> {
  
  // read route params
  const slug = (await params).slug
 
  // fetch data
  //const product = await getProductBySlug( slug );                 //Se puede poner el fetch nativo o axios.
  const product = initialData.products.find( p => p.slug === slug );
 
  // optionally access and extend (rather than replace) parent metadata
  //const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: product?.title ?? "Producto no encontrado",
    description: product?.description ?? "",

    openGraph: {
      title: product?.title ?? "Producto no encontrado",
      description: product?.description ?? "",
      //images: [],                                       // https://misitioweb.com/products/prod-1/imagen.png
      images:[`/products/${ product?.images[1] }`]
    },
  }
}



export default async function ProductBySlugPage({ params }: Props) {

  const { slug } = await params;


  const product = initialData.products.find( p => p.slug === slug );

  //const product = await getProductBySlug( slug );

  //opcion tipo revalidate pero con ORM aun disponible pero no recomendable en Next 15  https://nextjs.org/docs/app/api-reference/functions/unstable_cache
  /*
  const getProduct = unstable_cache(
    async () => {
      return await getProductBySlug( slug )
    },
    [`product-page-${ slug }`],
    { revalidate: 20 }                                //20 segundos.
  );
  const product = await getProduct();
  */

  if( !product ){
    notFound();
  }


  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">

      {/* Slideshow */}
      <div className="col-span-1 md:col-span-2">

        {/* Desktop Slideshow */}
        <ProductSlideshow
          title={ product.title }
          images={ product.images }
          className="hidden md:block"
        />

        {/* Mobile Slideshow */}
        <ProductMobileSlideshow
          title={ product.title }
          images={ product.images } 
          className="block md:hidden"
        />

      </div>
      
      {/* Detalles*/}
      <div className="col-span-1 px-5">
        
        <StockLabel slug={ product.slug }/>

        <h1 className={`${ titleFont.className } antialiased font-bold text-xl`}>{ product.title }</h1>
        <p className="text-lg mb-5">${ product.price }</p>

        
        {/*  PARA EL SELECTOR DE TALLAS, CANTIDAD Y BOTON DE AGREGAR AL CARRITO USAMOS LA TECNICA DE SEPARARLOS Y HACERLOS CLIENT COMPONENT*/}
        <AddToCart product={ product } />
   

        {/* Descripcion */}
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">{ product.description }</p>

      </div>
      
    </div>
  );
}

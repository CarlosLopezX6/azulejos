//export const revalidate = 60;                                                //Revalidacion de data cada 60 segundos.

import { getPaginatedProductWithImage } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";
import { Gender } from "@prisma/client";
import { notFound, redirect } from "next/navigation";

import { initialData } from "@/seed/seed";
const seedProducts = initialData.products;

interface Props {
  params: Promise<{ gender: string }>;
  searchParams: Promise<{ page?: string }>;
}

export default async function GenderByPage({ params, searchParams }: Props) {

  const { gender } = await params;
  const { page: pageParam } = await searchParams;

  const page = pageParam ? parseInt( pageParam ) : 1;
  
  const products = seedProducts.filter( p => p.gender === gender );

  /*
  const { products, currentPage, totalPages } = await getPaginatedProductWithImage({ page, gender: gender as Gender });
  */
 
 if( products.length === 0 ){      //Si por ejemplo en una pagina no hay productos, que me envie al inicio.
   redirect(`/gender/${ gender }`);
 }
 


  const labels: Record<string, string> = {       //Tipando objeto literal.
    'men': 'para Interior',
    'women': 'para Exterior',
    'kid': 'para Baño',
    'unisex': 'para todos'
  }


  // if( id === "kids" ){
  //   notFound();
  // }


  return (
    <>
      <Title 
        title={`Artículos ${ labels[gender] }`}
        subtitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid products={ products} />

      {/* <Pagination totalPages={ totalPages }/> */}
    </>
  );
}

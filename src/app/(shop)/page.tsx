//export const revalidate = 60;                                                //Revalidacion de data cada 60 segundos.

import { redirect } from "next/navigation";
import { getPaginatedProductWithImage } from "@/actions";
import { Pagination, PrincipalSlider, ProductGrid, Title } from "@/components";

import { initialData } from "@/seed/seed";
const products = initialData.products;


interface Props {
  searchParams: Promise<{ page?: string }>;           //Los search params siempre son string recuerda.
}

export default async function Home({ searchParams }: Props) {

  const { page: pageParam } = await searchParams;

  const page = pageParam ? parseInt( pageParam ) : 1;

  /*
  const { products, currentPage, totalPages } = await getPaginatedProductWithImage({ page }); 
  */

  if( products.length === 0 ){      //Si por ejemplo en una pagina no hay productos, que me envie al inicio.
    redirect('/');
  }
 

  return (
    <>
      <PrincipalSlider />

      <div className="mx-10 md:mx-52">
        <Title 
          title="Tienda"
          subtitle="Todos los productos"
          className="mb-2"
        />

        <ProductGrid products={ products } />

        {/* <Pagination totalPages={ totalPages }/> */}
      </div>
    </>
  );
}

/*
    Esta funcion genera los numeros de la paginacion. que es un arreglo tipo [1, 2, 3, '...', 40] por ejemplo.
*/

export const generatePaginationNumbers = ( currentPage: number, totalPages: number ) => {

    //Si el numero total de páginas es 7 o menos, mostraré todas las paginas sin puntos suspensivos.
    if( totalPages <= 7 ){
        return Array.from({ length: totalPages }, (_, i) => i + 1);   // [1, 2, 3, 4, 5, 6, 7]
    }

    //Si la página actual está entre las primeras 3 páginas, mostraré las primeras 3, puntos suspensivos, y las ultimas 2. 
    if( currentPage <= 3 ){
        return [ 1, 2, 3, '...', totalPages - 1,  totalPages ];      // [1, 2, 3, '...', 49, 50]
    }

    //Si la página actual está entre las últimas 3 páginas, mostraré las primeras 2, puntos suspensivos, y las ultimas 3. 
    if( currentPage >= totalPages - 2 ){
        return [ 1, 2, '...', totalPages - 2,  totalPages - 1, totalPages ];
    }

    //Si la página actual está en otro lugar medio, mostraré la primera pagina, puntos suspensivos, la pagina actual y vecinos.
    return [ 1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages ];
}
import { prisma }  from '../lib/prisma'
import { initialData } from './seed';


async function main() {

    // 1.- Borrar registros previos:
    //await Promise.all([
        await prisma.productImage.deleteMany(),
        await prisma.product.deleteMany(),
        await prisma.category.deleteMany()
    //]);


    const { categories, products } = initialData;

    // 2.- Insertando Categorias
    /*
        [
            { name: 'Shirt' }, { name: 'Hoodies' }, ...
        ]
    */
    //const categoriesData = categories.map( category => { return { name: category }} ) // Regresa un arreglo de nombres de categorias
    const categoriesData = categories.map( ( name ) => ({ name }) )

    //await prisma.category.createMany({                               //Comentado para uso de createManyAndReturn y evitar otra consulta a la db.
    const categoriesDB = await prisma.category.createManyAndReturn({   //Usamos esta para evitar hacer otra consulta abajo. Disponible a partir de la version Prisma ORM version 5.14.0
        data: categoriesData
    });


    // 2.5.- Mapeando relacion Categoria - Producto
    /*
        En Producto tenemos una propiedad llamada "type" que es la categoria a la que pertenece el producto, pero
        nosotros las categorias las tenemos en mayusculas y en producto estan en minusculas, debemos crear un mapa que
        asocie esa categoria en minuscula con el id de la categoria ya creada en este punto. El id de la categoria se lo puso
        la DB al hacer el paso anterior. Se puede hacer de muchas formas, en esta ocasion se uso reducer y arrojará un objeto. 
        Quedaria asi, es como un diccionario que asocia el id de la categoria en la base de datos con el string que tiene Producto:
        {
            'shirt': 'idblablabla',
            'pants': 'idblablalba2'
        } 
        Al parecer esto fue un error que se hizo con fines didacticos pero lo normal seria que no fuese necesario este
        mapeo (Creo yo), aveces sera necesario y aveces no pero yo por si las dudas pongo el procedimiento.
    */
    //const categoriesDB = await prisma.category.findMany();  //Si no usas createManyAndReturn y solo usaras create Many, necesitarias esta linea que es otra peticion a la DB.

    const categoriesMap = categoriesDB.reduce( (map, category) => {

        map[ category.name.toLowerCase() ] = category.id;

        return map;
    }, {} as Record<string, string>) //Empieza como un arreglo vacio y se ira llenando con <string='shirt', string=categoryId (el que genero la DB al crear las categorias arriba)>


    //3.- Agregando productos
    products.forEach( async( product ) => {

        /*
            Para este proyecto, las imagenes acuerdate que iran en una tabla diferente pero se se asociaran con el 
            producto mediante su id.
        */
        const { type, images, ...rest } = product;

        const dbProduct = await prisma.product.create({
            data: {
                ...rest,                                        //Aqui insertamos todo menos la propiedad type e images. 
                categoryId: categoriesMap[type]                 //Aqui utilizamos lo del mapeo.
            }
        });


        // 3.5.- Insertando imagenes en la tabla especial de las imagenes y asociandolas con su debido producto
        const imagesData = images.map( image => ({
            url: image,
            productId: dbProduct.id
        }));

        await prisma.productImage.createMany({
            data: imagesData
        });
    })


    console.log('Seed creado correctamente!');
}


(() => {

    if(process.env.NODE_ENV === 'production') return;  //Trata de que el seed no se corra en producción o no llegue ahi.

    main();
})();
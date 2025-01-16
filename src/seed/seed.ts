interface SeedProduct {
    id: string;
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: ValidSizes[];
    slug: string;
    tags: string[];
    title: string;
    type: ValidTypes;
    gender: SeedGender;
}

type ValidSizes = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
type ValidTypes = 'shirts'|'pants'|'hoodies'|'hats';

type SeedGender = 'men'|'women'|'kid'|'unisex'

interface SeedData {
    products: SeedProduct[],
    categories: string[]
}


export const initialData: SeedData = {

    categories: ['Shirts', 'Pants', 'Hoodies', 'Hats'],

    products: [
        {
            id: "38872d09-79d7-47b3-a802-83eee473d12c",
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'interior11.jpg',
                'interior12.jpg',
            ],
            inStock: 7,
            price: 75,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "arrebato_tahiti_natural_20_20",
            type: 'shirts',
            tags: ['sweatshirt'],
            title: "Arrebato Tahiti Natural 20x20",
            gender: 'men'
        },
        {
            id: "23b46329-34ec-43bb-9e93-8798b4255459",
            description: "The Men's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
            images: [
                'interior21.jpg',
                'interior22.jpg',
            ],
            inStock: 5,
            price: 200,
            sizes: ['XS','S','M','XL','XXL'],
            slug: "atlas_blanco_60_60",
            type: 'shirts',
            tags: ['jacket'],
            title: "Atlas Blanco 60x60",
            gender: 'men'
        },
        {
            id: "58d93831-da6d-49b9-98a4-dadcb5546fdf",
            description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
            images: [
                'interior31.jpg',
                'interior32.jpg',
            ],
            inStock: 10,
            price: 130,
            sizes: ['S','M','L','XL','XXL'],
            slug: "bamboo_green_15_30",
            type: 'shirts',
            tags: ['shirt'],
            title: "Bamboo Green 15x30",
            gender: 'men'
        },
        {
            id: "415da244-3b50-4d36-8ba0-d2c126fd12bd",
            description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Long Sleeve Tee features a subtle, water-based T logo on the left chest and our Tesla wordmark below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
            images: [
                'interior41.jpg',
                'interior42.jpg',
            ],
            inStock: 50,
            price: 45,
            sizes: ['XS','S','M','L'],
            slug: "bolonia_decor_miramonte_20_20",
            type: 'shirts',
            tags: ['shirt'],
            title: "Bolonia Decor Miramonte 20X20",
            gender: 'men'
        },
        {
            id: "88cb5efa-6666-4d58-bf93-e8857f2ec0b8",
            description: "Designed for exceptional comfort and inspired by the Cybertruck unveil event, the Cybertruck Bulletproof Tee is made from 100% cotton and features our signature Cybertruck icon on the back.",
            images: [
                'interior51.jpg',
                'interior52.jpg',
            ],
            inStock: 150,
            price: 30,
            sizes: ['M','L'],
            slug: "bottega_play_20_20",
            type: 'shirts',
            tags: ['shirt'],
            title: "Bottega Play 20x20",
            gender: 'men'
        },
        {
            id: "ea08c36f-42a4-4b9b-81d2-8bd0b4259be8",
            description: "Inspired by the Model Y order confirmation graphic, the limited edition Haha Yes Tee is designed for comfort and style. Made from 100% Peruvian cotton and featuring the Tesla wordmark across the chest, the exclusive tee will commemorate your order for years to come.",
            images: [
                'interior61.jpg',
                'interior62.jpg',
            ],
            inStock: 10,
            price: 35,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "carino_decor_marla_20_20",
            type: 'shirts',
            tags: ['shirt'],
            title: "Carino Decor Marla 20x20",
            gender: 'men'
        },
        {
            id: "9ac2baa0-46ee-46dd-90e3-71677a89ae70",
            description: "The Women's Cropped Puffer Jacket features a uniquely cropped silhouette for the perfect, modern style while on the go during the cozy season ahead. The puffer features subtle silicone injected Tesla logos below the back collar and on the right sleeve, custom matte metal zipper pulls and a soft, fleece lined collar. Made from 87% nylon and 13% polyurethane.",
            images: [
                'exterior11.jpg',
                'exterior12.jpg',
            ],
            inStock: 85,
            price: 225,
            sizes: ['XS','S','M'],
            slug: "carino_deco_infantas_20_20",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "Carino Deco Infantas 20x20",
            gender: 'women'
        },
        {
            id: "7a632869-4ccd-4eed-b2cb-234c45be9f26",
            description: "Introducing the Tesla Chill Collection. The Women's Chill Half Zip Cropped Hoodie has a premium, soft fleece exterior and cropped silhouette for comfort in everyday lifestyle. The hoodie features an elastic hem that gathers at the waist, subtle thermoplastic polyurethane Tesla logos along the hood and on the sleeve, a double layer single seam hood and a custom ring zipper pull. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'exterior21.jpg',
                'exterior22.jpg',
            ],
            inStock: 10,
            price: 130,
            sizes: ['XS','S','M','XXL'],
            slug: "bali_stones_sand_20_20",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "Bali Stones Sand 20x20",
            gender: 'women'
        },
        {
            id: "8fef8a17-9e07-4977-96d0-36cebbe48140",
            description: "Introducing the Tesla Raven Collection. The Women's Raven Slouchy Crew Sweatshirt has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The slouchy crew features a subtle thermoplastic polyurethane Tesla wordmark on the left sleeve and a french terry interior for a cozy look and feel in every season. Pair it with your Raven Joggers or favorite on the go fit. Made from 70% bamboo and 30% cotton.",
            images: [
                'exterior31.jpg',
                'exterior32.jpg',
            ],
            inStock: 9,
            price: 110,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "core_extrem_60_60",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "Core Extrem 60x60",
            gender: 'women'
        },
        {
            id: "d51607fc-b6c3-488d-8397-b3cf67cdb36f",
            description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Long Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50%",
            images: [
                'exterior41.jpg',
                'exterior42.jpg',
            ],
            inStock: 10,
            price: 45,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "mural_protea_120_120",
            type: 'shirts',
            tags: ['shirt'],
            title: "Mural Protea 120x120",
            gender: 'women'
        },
        {
            id: "cc3637c1-7013-44e3-811a-54ed2cf3e61a",
            description: "ntroducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50% polyester.",
            images: [
               'exterior51.jpg',
               'exterior52.jpg',
            ],
            inStock: 0,
            price: 40,
            sizes: ['XS','S'],
            slug: "stanza_lava_20_20",
            type: 'shirts',
            tags: ['shirt'],
            title: "Stanza Lava 20x20",
            gender: 'women'
        },
        {
            id: "8c394b66-5033-4c77-8a1a-c99a6733cb91",
            description: "Designed for style and comfort, the ultrasoft Women's T Logo Short Sleeve Scoop Neck Tee features a tonal 3D silicone-printed T logo on the left chest. Made of 50% Peruvian cotton and 50% Peruvian viscose.",
            images: [
                'exterior61.jpg',
                'exterior62.jpg',
            ],
            inStock: 30,
            price: 35,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "kursaal_extreme_ashen_60_60",
            type: 'shirts',
            tags: ['shirt'],
            title: "Kursaal Extreme Ashen 60x60",
            gender: 'women'
        },
        {
            id: "a35c1772-8618-415b-915d-d2c9a59ef8e6",
            description: "Designed for fit, comfort and style, the Kids Cybertruck Graffiti Long Sleeve Tee features a water-based Cybertruck graffiti wordmark across the chest, a Tesla wordmark down the left arm and our signature T logo on the back collar. Made from 50% cotton and 50% polyester.",
            images: [
                'baño11.jpg',
                'baño12.jpg',
            ],
            inStock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            slug: "anticatto_white_20_20",
            type: 'shirts',
            tags: ['shirt'],
            title: "Anticatto White 20X20",
            gender: 'kid'
        },
        {
            id: "4de9a31d-edba-43b7-aa2f-d59f5eb55007",
            description: "The Kids Scribble T Logo Tee is made from 100% Peruvian cotton and features a Tesla T sketched logo for every young artist to wear.",
            images: [
                'baño21.jpg',
                'baño22.jpg',
            ],
            inStock: 14,
            price: 25,
            sizes: ['XS','S','M'],
            slug: "ocean_white_15_15",
            type: 'shirts',
            tags: ['shirt'],
            title: "Ocean White 15x15",
            gender: 'kid'
        },
        {
            id: "7d4c78b9-906d-4fdd-a2f9-5145d2e4511b",
            description: "The Kids Cybertruck Tee features the iconic Cybertruck graffiti wordmark and is made from 100% Peruvian cotton for maximum comfort.",
            images: [
                'baño31.jpg',
                'baño32.jpg',
            ],
            inStock: 10,
            price: 25,
            sizes: ['XS','S','M'],
            slug: "barro_ocre_20_20",
            type: 'shirts',
            tags: ['shirt'],
            title: "Barro Ocre 20X20",
            gender: 'kid'
        },
        {
            id: "c120e383-17dc-4849-847d-52fa589117f6",
            description: "The refreshed Kids Racing Stripe Tee is made from 100% Peruvian cotton, featuring a newly enhanced racing stripe with a brushed Tesla wordmark that's perfect for any speed racer.",
            images: [
                'baño41.jpg',
                'baño42.jpg',
            ],
            inStock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            slug: "biarritz_blu_7_5_15",
            type: 'shirts',
            tags: ['shirt'],
            title: "Biarritz Blu 7.5x15",
            gender: 'kid'
        },
        {
            id: "385e5da8-2801-49e9-a28b-0b7f8c78d785",
            description: "Designed for fit, comfort and style, the Tesla T Logo Tee is made from 100% Peruvian cotton and features a silicone-printed T Logo on the left chest.",
            images: [
                'baño51.jpg',
                'baño52.jpg',
            ],
            inStock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            slug: "caronte_black_60_60",
            type: 'shirts',
            tags: ['shirt'],
            title: "Caronte Black 60x60",
            gender: 'kid'
        },
        {
            id: "71e8d125-75ec-4b53-9955-706695151dc6 ​",
            description: "The checkered tee is made from long grain, GMO free Peruvian cotton. Peru is the only country in the world where cotton is picked by hand on a large scale. The 4,500-year-old tradition prevents damage to the fiber during the picking process and removes the need to use chemicals to open the cotton plants before harvest. This environmentally friendly process results in cotton that is soft, strong, and lustrous – and the tee will get even softer with every wash.",
            images: [
                'baño61.jpg',
                'baño62.jpg',
            ],
            inStock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            slug: "fired_middle_green_20_20",
            type: 'shirts',
            tags: ['shirt'],
            title: "Fired Middle Green 20x20",
            gender: 'kid'
        },
    ]
}
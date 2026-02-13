export interface ProductData {
    id: string;
    img: string;
    category: string;
    name: string;
    price: number;
    priceFormatted: string;
    oldPrice: number | null;
    oldPriceFormatted: string | null;
    badge: string | null;
    badgeColor: string;
    categoryColor: string;
    rating: number;
    description: string;
}

export const PRODUCTS_DATA: ProductData[] = [
    {
        id: '1',
        img: 'photo-1571175443880-49e1d25b2bc5',
        category: 'HELADERAS',
        name: 'Heladera No Frost 350L Inverter',
        price: 8500000,
        priceFormatted: '₲ 8.500.000',
        oldPrice: 11000000,
        oldPriceFormatted: '₲ 11.000.000',
        badge: 'NUEVO',
        badgeColor: 'bg-green-500',
        categoryColor: 'text-primary',
        rating: 4,
        description: 'Tecnología inverter, bajo consumo'
    },
    {
        id: '2',
        img: 'photo-1626806787461-102c1bfaaea1',
        category: 'LAVARROPAS',
        name: 'Lavarropas Carga Superior 7kg',
        price: 5400000,
        priceFormatted: '₲ 5.400.000',
        oldPrice: 7200000,
        oldPriceFormatted: '₲ 7.200.000',
        badge: '-25%',
        badgeColor: 'bg-red-500',
        categoryColor: 'text-blue-400',
        rating: 5,
        description: 'Carga superior, 7kg de capacidad'
    },
    {
        id: '3',
        img: 'photo-1585659722983-3a675dabf23d',
        category: 'HORNOS',
        name: 'Horno Eléctrico Empotrable 60cm',
        price: 6100000,
        priceFormatted: '₲ 6.100.000',
        oldPrice: null,
        oldPriceFormatted: null,
        badge: null,
        badgeColor: '',
        categoryColor: 'text-purple-400',
        rating: 4,
        description: 'Empotrable, multifunción'
    },
    {
        id: '4',
        img: 'photo-1574269909862-7e1d70bb8078',
        category: 'MICROONDAS',
        name: 'Microondas Digital 28L Grill',
        price: 3050000,
        priceFormatted: '₲ 3.050.000',
        oldPrice: 4100000,
        oldPriceFormatted: '₲ 4.100.000',
        badge: 'OFERTA',
        badgeColor: 'bg-amber-500',
        categoryColor: 'text-amber-400',
        rating: 5,
        description: '28L, función grill'
    },
    {
        id: '5',
        img: 'photo-1588854337221-4cf9fa96059c',
        category: 'AIRE ACONDICIONADO',
        name: 'Aire Split Frío/Calor 3500W',
        price: 11200000,
        priceFormatted: '₲ 11.200.000',
        oldPrice: null,
        oldPriceFormatted: null,
        badge: null,
        badgeColor: '',
        categoryColor: 'text-cyan-400',
        rating: 4,
        description: 'Split, frío/calor, 3500W'
    },
    {
        id: '6',
        img: 'photo-1556911220-bff31c812dba',
        category: 'LAVAVAJILLAS',
        name: 'Lavavajillas 12 Cubiertos A++',
        price: 9500000,
        priceFormatted: '₲ 9.500.000',
        oldPrice: 13600000,
        oldPriceFormatted: '₲ 13.600.000',
        badge: '-30%',
        badgeColor: 'bg-red-500',
        categoryColor: 'text-pink-400',
        rating: 5,
        description: '12 cubiertos, eficiencia A++'
    },
    {
        id: '7',
        img: 'photo-1595515106969-1ce29566ff1c',
        category: 'COCINAS',
        name: 'Cocina a Gas 4 Hornallas Vidrio',
        price: 6800000,
        priceFormatted: '₲ 6.800.000',
        oldPrice: null,
        oldPriceFormatted: null,
        badge: null,
        badgeColor: '',
        categoryColor: 'text-emerald-400',
        rating: 4,
        description: '4 hornallas, tapa de vidrio'
    },
    {
        id: '8',
        img: 'photo-1558618666-fcd25c85cd64',
        category: 'FREEZERS',
        name: 'Freezer Vertical 250L A+ Inverter',
        price: 7500000,
        priceFormatted: '₲ 7.500.000',
        oldPrice: null,
        oldPriceFormatted: null,
        badge: 'ECO',
        badgeColor: 'bg-green-500',
        categoryColor: 'text-primary',
        rating: 5,
        description: 'Vertical, 250L, bajo consumo'
    },
];

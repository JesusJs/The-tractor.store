
export interface Variant{
    sku: string;
    productId: number;
    engineType: 'Diesel' | 'Electric' | 'Hybrid';
    price: number;
    stock: number;
    color: string;
    imageUrl: string;
}


export interface Producto {
    id: number;
    title: string;
    description: string;
    variants: Variant[];

}

export type LineItem = Pick<Variant, 'sku' | 'price' | 'color' | 'imageUrl'> & {
    productTitle: string; 
    quantity: number;
};

export interface cart {

    id:string;
    items: LineItem[];
    totalAmount: number;
    updateAt: Date;
}

export interface Store{
    id: number;
    name:string;
    address: string;
    coordinates: {lat: number; lng: number};
}

export type Result<T, E = string> = 
    | { success: true; data: T } 
    | { success: false; error: E };
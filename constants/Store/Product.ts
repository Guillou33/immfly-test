import { CurrencyPrice } from "../Util";

export enum PriceType {
    RET = 'Retail',
    CRW = 'Crew',
    HHO = 'Happy hour',
    BSN = 'Invitation business',
    TOU = 'Invitation tourist',
}

export interface IProduct {
    id: number;
    title: string;
    price: CurrencyPrice;
    img: string;
    initialStock: number;
    stock: number;
}
export type Product = Record<number, IProduct>

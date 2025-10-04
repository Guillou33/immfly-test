import { CurrencyPrice } from "../Util";

export interface IProduct {
    id: number;
    title: string;
    price: CurrencyPrice;
    img: string;
    initialStock: number;
    stock: number;
}
export type Product = Record<number, IProduct>

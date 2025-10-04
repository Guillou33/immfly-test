import { Currency } from "@/lib/conversion";

export interface IBasket {
    productIds: Array<number>;
    quantities: Record<number, number>; // productId -> quantity
    totalPrices: Record<Currency, number>; // currency -> total price
}

export type Basket = Record<number, IBasket>

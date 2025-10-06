import { Currency } from "@/lib/conversion";
import { Product } from "./Product";

export enum IPaymentMethod {
    CARD = 'card',
    CASH = 'cash'
}

export interface ProductOrder {
    product: Product;
    quantity: number;
    amount: number;
}

export interface PaymentInfos {
    method: IPaymentMethod;
    currency: Currency;
    total: number;
    order: ProductOrder[];
}

export interface IBasket {
    productIds: Array<number>;
    quantities: Record<number, {productId: number, quantity: number;}>; // productId -> productId, quantity
    totalPrices: Record<Currency, number>; // currency -> total price
}

export type Basket = Record<number, IBasket>;

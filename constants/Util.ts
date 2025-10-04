import { Currency } from "@/lib/conversion";
import { IProduct } from "./Store/Product";

export type CurrencyPrice = {
    [Currency.USD]: number;
    [Currency.EUR]: number;
    [Currency.GBP]: number;
}

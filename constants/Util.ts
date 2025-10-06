import { Currency } from "@/lib/conversion";
import { IProduct } from "./Store/Product";

export type CurrencyPrice = {
    [Currency.USD]: number;
    [Currency.EUR]: number;
    [Currency.GBP]: number;
}

export type CurrencyUIList = {
    value: string;
    list: Array<[
      { _id: Currency, value: 'MALE' },
      { _id: Currency, value: 'FEMALE' },
      { _id: Currency, value: 'OTHERS' },
    ]>,
    selectedList: [],
    error: '',
  }

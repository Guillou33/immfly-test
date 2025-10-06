import { PriceType } from "@/constants/Store/Product";
import { Currency, CurrencyPrice, priceTypes } from "@/constants/Util";

export function getPriceType(price: number, type: PriceType): number {
  return price * priceTypes[type];
}

export function getTotal(prices: CurrencyPrice, selectedCurrency: Currency = Currency.EUR, type: PriceType = PriceType.RET): number {
  return getPriceType(prices[selectedCurrency], type).toFixed(2) as unknown as number;
}

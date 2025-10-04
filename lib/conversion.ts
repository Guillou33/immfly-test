import { CurrencyPrice } from "@/constants/Util";

// Currency names according to ISO 4217
export enum Currency {
  USD = 'USD',
  EUR = 'EUR',
  GBP = 'GBP',
}

export interface IConversion {
  [key: string]: {
    symbol: string; // Currency symbol
    [key: string]: number | string; // Conversion rates to other currencies
  };
}

export const conversions: IConversion = {
  // Currency conversion rates
  [Currency.USD]: {
    symbol: '$',
    EUR: 0.85,
    GBP: 0.75,
  },
  [Currency.EUR]: {
    symbol: '€',
    USD: 1.18,
    GBP: 0.88,
  },
  [Currency.GBP]: {
    symbol: '£',
    USD: 1.33,
    EUR: 1.14,
  },
};

export function getTotal(prices: CurrencyPrice, selectedCurrency: Currency = Currency.EUR): number {
  return prices[selectedCurrency];
}

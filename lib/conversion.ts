import { PriceType } from "@/constants/Store/Product";
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

export const priceTypes = {
  [PriceType.RET]: 1.0, // Retail price
  [PriceType.CRW]: 0.9, // Crew price (10% discount)
  [PriceType.HHO]: 0.8, // Happy hour price (20% discount)
  [PriceType.BSN]: 0.85, // Invitation business price (15% discount)
  [PriceType.TOU]: 0.95, // Invitation tourist price (5% discount)
}

export function getPriceType(price: number, type: PriceType): number {
  return price * priceTypes[type];
}

export function getTotal(prices: CurrencyPrice, selectedCurrency: Currency = Currency.EUR, type: PriceType = PriceType.RET): number {
  return getPriceType(prices[selectedCurrency], type).toFixed(2) as unknown as number;
}

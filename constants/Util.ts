import { PriceType } from "./Store/Product";

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

  // Currency names according to ISO 4217
export enum Currency {
  USD = 'USD',
  EUR = 'EUR',
  GBP = 'GBP',
}

export interface IConversion {
  [key: string]: {
    symbol: string; // Currency symbol
    rates: {
      [key: string]: number; // Conversion rates to other currencies
    }
  };
}

export const conversions: IConversion = {
  // Currency conversion rates
  [Currency.USD]: {
    symbol: '$',
    rates: {
      [Currency.USD]: 1.0,
      [Currency.EUR]: 0.85,
      [Currency.GBP]: 0.75
    }
  },
  [Currency.EUR]: {
    symbol: '€',
    rates : {
      [Currency.EUR]: 1.0,
      [Currency.USD]: 1.18,
      [Currency.GBP]: 0.88,
    }
  },
  [Currency.GBP]: {
    symbol: '£',
    rates: {
      [Currency.GBP]: 1.0,
      [Currency.USD]: 1.33,
      [Currency.EUR]: 1.14,
    }
  },
};

export const priceTypes = {
  [PriceType.RET]: 1.0, // Retail price
  [PriceType.CRW]: 0.9, // Crew price (10% discount)
  [PriceType.HHO]: 0.8, // Happy hour price (20% discount)
  [PriceType.BSN]: 0.85, // Invitation business price (15% discount)
  [PriceType.TOU]: 0.95, // Invitation tourist price (5% discount)
}

// Currency names according to ISO 4217
export enum Currency {
  USD = 'USD',
  EUR = 'EUR',
  GBP = 'GBP',
}

export const conversions = {
  // Currency conversion rates
  [Currency.USD]: {
    EUR: 0.85,
    GBP: 0.75,
  },
  [Currency.EUR]: {
    USD: 1.18,
    GBP: 0.88,
  },
  [Currency.GBP]: {
    USD: 1.33,
    EUR: 1.14,
  },
};

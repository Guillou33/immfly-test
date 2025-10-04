export interface ApiCurrencyPrice {
  euro: number;
  dollar: number;
  pound: number;
}

export interface ApiProduct {
    id: number;
    name: string;
    price: ApiCurrencyPrice;
    img: string;
    stock: number;
}

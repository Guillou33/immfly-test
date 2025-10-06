import { conversions, Currency } from "@/lib/conversion";
import { useState } from "react";

export const useCurrencyList = () => {

  const [currency, setCurrency] = useState({
    value: '',
    list: [
      { _id: Currency.EUR, value: `Euros ${conversions[Currency.EUR].symbol}` },
      { _id: Currency.USD, value: `Dollars ${conversions[Currency.USD].symbol}` },
      { _id: Currency.GBP, value: `Pounds ${conversions[Currency.GBP].symbol}` },
    ],
    selectedList: [],
    error: '',
  });

  return { currency, setCurrency };
}

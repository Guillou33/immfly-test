
import { conversions, Currency } from "@/constants/Util";
import { useState } from "react";

export const useCurrencyList = () => {

  const [currency, setCurrency] = useState({
    value: '',
    list: [
      { _id: Currency.EUR, value: `${conversions[Currency.EUR].symbol}` },
      { _id: Currency.USD, value: `${conversions[Currency.USD].symbol}` },
      { _id: Currency.GBP, value: `${conversions[Currency.GBP].symbol}` },
    ],
    selectedList: [],
    error: '',
  });

  return { currency, setCurrency };
}

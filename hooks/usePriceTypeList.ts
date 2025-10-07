import { PriceType } from "@/constants/Store/Product";
import { useState } from "react";

// hooks/usePriceTypeList.ts
// Custom hook to manage price type selection
// and provide a list of available price types.
// Used in PaperSelect component.
export const usePriceTypeList = () => {

  const [priceType, setPriceType] = useState({
    value: '',
    list: [
      { _id: PriceType.RET, value: PriceType.RET },
      { _id: PriceType.CRW, value: PriceType.CRW },
      { _id: PriceType.HHO, value: PriceType.HHO },
      { _id: PriceType.BSN, value: PriceType.BSN },
      { _id: PriceType.TOU, value: PriceType.TOU },
    ],
    selectedList: [],
    error: '',
  });

  return { priceType, setPriceType };
}

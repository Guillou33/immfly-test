// hooks/useBasketSnackbar.ts
import { IBasket } from '@/constants/Store/Basket';
import { useEffect, useState } from 'react';

export const useVisibleSnackbar = (basket: IBasket) => {
  const [visibleSnackbar, setVisibleSnackbar] = useState(basket.productIds.length > 0);

  useEffect(() => {
    setVisibleSnackbar(basket.productIds.length > 0);
  }, [basket]);

  return {visibleSnackbar, setVisibleSnackbar};
};

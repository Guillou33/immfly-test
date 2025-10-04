// hooks/useHydrateProducts.ts
import { Product } from '@/constants/Store/Product';
import { useEffect } from 'react';

export const useHydrateProducts = (
  products: Product,
  hydrateProducts: () => void
) => {
  useEffect(() => {
    if (Object.keys(products).length === 0) {
      hydrateProducts();
    }
  }, [products]);
};

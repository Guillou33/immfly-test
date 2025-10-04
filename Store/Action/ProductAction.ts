import { fetchProducts } from '@/api/Product';
import { IProduct } from '@/constants/Store/Product';
import { formatProducts } from '@/lib/format/apiToStore';
import { AppDispatch } from '../configStore';
import { ActionTypes } from './types';

export const _hydrateProducts = async (dispatch: AppDispatch) => {
      try{
        const productsfromApi = await fetchProducts();
        if(productsfromApi && productsfromApi.length > 0){
          // console.log("Disptach fetched products:", productsfromApi);
          await dispatch({type: ActionTypes.HYDRATE_PRODUCTS, payload: formatProducts(productsfromApi)});
        }
      }catch(e: any){
          console.error("Error fetching products", e);
      }
};

export const _handleStock = async (dispatch: AppDispatch, {product, quantity}: {product: IProduct, quantity: number}) => {
    console.log("Action: handleStock", product.id, quantity);
    await dispatch({type: ActionTypes.HANDLE_STOCK, payload: {
              productId: product.id,
              quantity: quantity
        }});
};

export const hydrateProducts = () => (dispatch: AppDispatch) => _hydrateProducts(dispatch);
export const handleStock = (product: IProduct, quantity: number) => (dispatch: AppDispatch) => _handleStock(dispatch, {product, quantity});

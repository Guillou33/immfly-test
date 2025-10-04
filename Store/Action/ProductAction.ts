import { fetchProducts } from '@/api/Product';
import { formatProducts } from '@/lib/format/apiToStore';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export const _hydrateProducts = () => {
    return async (dispatch: Dispatch) => {
        try{
          const productsfromApi = await fetchProducts();
          if(productsfromApi && productsfromApi.data && productsfromApi.data.length > 0){
            dispatch({type: ActionTypes.HYDRATE_PRODUCTS, payload: formatProducts(productsfromApi.data)});
          }
        }catch(e: any){
            console.error("Error fetching products", e);
        }
    }
};

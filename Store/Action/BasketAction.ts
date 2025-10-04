import { IProduct } from '@/constants/Store/Product';
import { CurrencyPrice } from '@/constants/Util';
import { AppDispatch } from '../configStore';
import { ActionTypes } from './types';

export interface ProductInBasket {
    // Define the structure of the payload here
    productId: number;
    quantity: number;
    price: CurrencyPrice;
}
// export const updateBasket = async (dispatch: Dispatch) => (product: IProduct) => {
//         try{
//             dispatch({type: ActionTypes.UPDATE_BASKET, payload: {
//                 ...product
//             }});
//         }catch(e: any){
//             console.error("Error update basket")
//         }

// };

export const _updateBasket = async (dispatch: AppDispatch, {product, quantity}: {product: IProduct, quantity: number}) => {
    console.log("Action: updateBasket", product.id, quantity);
    await dispatch({type: ActionTypes.UPDATE_BASKET, payload: {
              productId: product.id,
              quantity: quantity,
              price: product.price
        }});
};

export const clearBasket = () => {
    return async (dispatch: AppDispatch) => {
        try{
            dispatch({type: ActionTypes.CLEAR_BASKET});
        }catch(e: any){
            console.error("Error clearing basket")
        }
    }
}


export const updateBasket = (payload:{product: IProduct, quantity: number}) => (dispatch: AppDispatch) => _updateBasket(dispatch, payload);

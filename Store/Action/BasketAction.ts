import { Dispatch } from '@reduxjs/toolkit';
import { ActionTypes } from './types';
import { CurrencyPrice } from '@/constants/Util';
import { IProduct } from '@/constants/Store/Product';

export interface ProductInBasket {
    // Define the structure of the payload here
    productId: number;
    quantity: number;
    price: CurrencyPrice;
}
// export const updateBasket = async (dispatch: Dispatch) => (productInBasket: ProductInBasket) => {
//         try{
//             dispatch({type: ActionTypes.UPDATE_BASKET, payload: {
//                 ...productInBasket
//             }});
//         }catch(e: any){
//             console.error("Error update basket")
//         }

// };

export const updateBasket = (productInBasket: IProduct, quantity: number) => {
    return async (dispatch: Dispatch) => {
        try{
            dispatch({type: ActionTypes.UPDATE_BASKET, payload: {
                 productId: productInBasket.id,
                  quantity: quantity,
                  price: productInBasket.price
            }});
        }catch(e: any){
            console.error("Error update basket")
        }
    }
};

export const clearBasket = () => {
    return async (dispatch: Dispatch) => {
        try{
            dispatch({type: ActionTypes.CLEAR_BASKET});
        }catch(e: any){
            console.error("Error clearing basket")
        }
    }
}

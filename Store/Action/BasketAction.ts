import { IPaymentMethod } from '@/constants/Store/Basket';
import { IProduct, PriceType } from '@/constants/Store/Product';
import { Currency, CurrencyPrice } from '@/constants/Util';
import { AppDispatch } from '../configStore';
import { ActionTypes } from './types';

export interface ProductInBasket {
    productId: number;
    quantity: number;
    price: CurrencyPrice;
}

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

export const _setSelectedCurrency = async (dispatch: AppDispatch, currency: Currency) => {
    await dispatch({type: ActionTypes.UPDATE_SELECTED_CURRENCY, payload: currency});
}
export const _updatePriceType = async (dispatch: AppDispatch, priceType: PriceType) => {
    await dispatch({type: ActionTypes.UPDATE_SELECTED_PRICE_TYPE, payload: priceType});
}
export const _setPaymentInfos = async (dispatch: AppDispatch, method: IPaymentMethod) => {
  await dispatch({type: ActionTypes.SET_PAYMENT_INFOS, payload: {method}});

}

export const setPaymentInfos = (method: IPaymentMethod) => (dispatch: AppDispatch) => _setPaymentInfos(dispatch, method);
export const updateBasket = (payload:{product: IProduct, quantity: number}) => (dispatch: AppDispatch) => _updateBasket(dispatch, payload);
export const updateSelectedCurrency = (currency: Currency) => (dispatch: AppDispatch) => _setSelectedCurrency(dispatch, currency);
export const updatePriceType = (priceType: PriceType) => (dispatch: AppDispatch) => _updatePriceType(dispatch, priceType);

import { IPaymentMethod } from '@/constants/Store/Basket';
import { IProduct, PriceType } from '@/constants/Store/Product';
import { Currency, CurrencyPrice } from '@/constants/Util';
import { AppDispatch } from '../configStore';
import { ActionTypes } from './types';
import { sendPayment } from '@/api/Product';

export interface ProductInBasket {
    productId: number;
    quantity: number;
    price: CurrencyPrice;
}

export const _updateBasket = async (dispatch: AppDispatch, {product, quantity}: {product: IProduct, quantity: number}) => {
    await dispatch({type: ActionTypes.UPDATE_BASKET, payload: {
              productId: product.id,
              quantity: quantity,
              price: product.price
        }});
};

export const _clearBasket = async (dispatch: AppDispatch) => {
      await dispatch({type: ActionTypes.CLEAR_BASKET});
}

export const _setSelectedCurrency = async (dispatch: AppDispatch, currency: Currency) => {
    await dispatch({type: ActionTypes.UPDATE_SELECTED_CURRENCY, payload: currency});
}
export const _updatePriceType = async (dispatch: AppDispatch, priceType: PriceType) => {
    await dispatch({type: ActionTypes.UPDATE_SELECTED_PRICE_TYPE, payload: priceType});
}
export const _setPaymentInfos = async (dispatch: AppDispatch, method: IPaymentMethod, amount: number, selectedCurrency: Currency) => {
  await dispatch({type: ActionTypes.SET_PAYMENT_INFOS, payload: {method, amount, selectedCurrency}});
  await sendPayment(method, amount, selectedCurrency);

}

export const setPaymentInfos = (method: IPaymentMethod, amount: number, selectedCurrency: Currency) => (dispatch: AppDispatch) => _setPaymentInfos(dispatch, method, amount, selectedCurrency);
export const updateBasket = (payload:{product: IProduct, quantity: number}) => (dispatch: AppDispatch) => _updateBasket(dispatch, payload);
export const updateSelectedCurrency = (currency: Currency) => (dispatch: AppDispatch) => _setSelectedCurrency(dispatch, currency);
export const updatePriceType = (priceType: PriceType) => (dispatch: AppDispatch) => _updatePriceType(dispatch, priceType);
export const clearBasket = () => (dispatch: AppDispatch) => _clearBasket(dispatch);

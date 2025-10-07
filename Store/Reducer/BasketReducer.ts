
import { IBasket } from "@/constants/Store/Basket";
import { PriceType } from "@/constants/Store/Product";
import { conversions, Currency, CurrencyPrice } from "@/constants/Util";
import { ActionTypes } from "../Action/types";

export interface BasketState {
    basket: IBasket;
    selectedCurrency: Currency;
    selectedPriceType: PriceType;
    paymentInfos: string;
}

const initialBasket: IBasket = {
  productIds: [],
  quantities: {},
  totalPrices: {
    [Currency.EUR]: 0,
    [Currency.USD]: 0,
    [Currency.GBP]: 0
  },
}

const INITIAL_STATE: BasketState = {
    basket: initialBasket,
    selectedCurrency: Currency.EUR,
    selectedPriceType: PriceType.RET,
    paymentInfos: ""
}

export default function productReducer(state = INITIAL_STATE, action: any) {
    switch (action.type) {
        case ActionTypes.UPDATE_BASKET:
          const data = action.payload;
          const currentQuantity = state.basket.quantities[data.productId]?.quantity || 0;

          // Removing item (quantity === -1)
          if (data.quantity === -1) {
              if (currentQuantity === 0) {
                  console.warn("Trying to remove a product that is not in the basket", data.productId);
                  return state;
              }

              // Remove item completely if it would reach 0
              if (currentQuantity === 1) {
                  const { [data.productId]: removed, ...remainingQuantities } = state.basket.quantities;
                  return {
                      ...state,
                      basket: {
                          ...state.basket,
                          productIds: state.basket.productIds.filter(id => id !== data.productId),
                          quantities: remainingQuantities,
                          totalPrices: setNewTotalPrices(state.basket.totalPrices, data.quantity, data.price)
                      }
                  };
              }
          }

          // Add or update item
          const newQuantity = currentQuantity === 0 ? 1 : currentQuantity + data.quantity;
          const needsToAddProductId = currentQuantity === 0;

          return {
              ...state,
              basket: {
                  ...state.basket,
                  productIds: needsToAddProductId
                      ? [...state.basket.productIds, data.productId]
                      : state.basket.productIds,
                  quantities: {
                      ...state.basket.quantities,
                      [data.productId]: {
                          quantity: newQuantity,
                          productId: data.productId
                      }
                  },
                  // set new total prices for all currencies
                  totalPrices: setNewTotalPrices(state.basket.totalPrices, data.quantity, data.price)
              }
          };
          case ActionTypes.SET_PAYMENT_INFOS:
            return {
                ...state,
                paymentInfos: `${action.payload.amount} ${conversions[action.payload.selectedCurrency].symbol}. Payment with ${action.payload.method}.`
            };
          case ActionTypes.UPDATE_SELECTED_CURRENCY:
            return {
                ...state,
                selectedCurrency: action.payload
            };
          case ActionTypes.UPDATE_SELECTED_PRICE_TYPE:
            return {
                ...state,
                selectedPriceType: action.payload
            };
          case ActionTypes.CLEAR_BASKET:
            return {
                ...state,
                basket: initialBasket
            };
        default:
            return state;
    }
}

function setNewTotalPrices(totalPrices: Record<Currency, number>, quantity: number, productPrices: CurrencyPrice): Record<Currency, number> {
    return {
        [Currency.EUR]: quantity === 1 ? totalPrices[Currency.EUR] + productPrices[Currency.EUR] : totalPrices[Currency.EUR] - productPrices[Currency.EUR],
        [Currency.USD]: quantity === 1 ? totalPrices[Currency.USD] + productPrices[Currency.USD] : totalPrices[Currency.USD] - productPrices[Currency.USD],
        [Currency.GBP]: quantity === 1 ? totalPrices[Currency.GBP] + productPrices[Currency.GBP] : totalPrices[Currency.GBP] - productPrices[Currency.GBP],
    };
}

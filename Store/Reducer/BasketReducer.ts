
import { IBasket } from "@/constants/Store/Basket";
import { CurrencyPrice } from "@/constants/Util";
import { Currency } from "@/lib/conversion";
import { ProductInBasket } from "../Action/BasketAction";
import { ActionTypes } from "../Action/types";

const initialBasket: IBasket = {
  productIds: [],
  quantities: {},
  totalPrices: {
    [Currency.EUR]: 0,
    [Currency.USD]: 0,
    [Currency.GBP]: 0
  }
}

const INITIAL_STATE = {
    basket: initialBasket
}

export default function productReducer(state = INITIAL_STATE, action: any) {
    let data;
    switch (action.type) {
        case ActionTypes.UPDATE_BASKET:
          let newBasket = state.basket;
          data = action.payload as ProductInBasket;
          if (data.quantity === -1) {
              // Remove item from basket if quantity is 0 or less
              if(newBasket.quantities[data.productId] === 1){
                delete newBasket.quantities[data.productId];
              }else{
                newBasket.quantities[data.productId] -= 1;
              }
          }
          if(data.quantity === 1){
              // Add item to basket
              if(state.basket.quantities[data.productId] === undefined){
                  newBasket.quantities[data.productId] = 1;
              }else{
                  newBasket.quantities[data.productId] += 1;
              }
          }
          newBasket.totalPrices = setNewTotalPrices(state.basket.totalPrices, data.quantity, data.price);
          return {
              ...state,
              basket: newBasket
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

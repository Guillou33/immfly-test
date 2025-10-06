
import { Product } from "@/constants/Store/Product";
import { ActionTypes } from "../Action/types";

let initialFirstProducts: Product = {}

interface ProductState {
    products: Product;
}

const INITIAL_STATE: ProductState = {
    products: initialFirstProducts
};

// Reducer for products state
// Note: This reducer only handles product-related actions
export default function productReducer(state = INITIAL_STATE, action: any) {
    let data;
    switch (action.type) {
        case ActionTypes.HYDRATE_PRODUCTS:
          data = action.payload;

          // Create a proper immutable copy
          return {
              ...state,
              products: data
          };
        case ActionTypes.HANDLE_STOCK:
          data = action.payload;
          const currentStock = state.products[data.productId]?.stock || 0;
          const newStock = currentStock + data.quantity;

          if(newStock < 0){
              console.warn("Trying to reduce stock below 0 for product", data.productId);
              return state;
          }

          return {
              ...state,
              products: {
                  ...state.products,
                  [data.productId]: {
                      ...state.products[data.productId],
                      stock: newStock
                  }
              }
          };
        default:
            return state;
    }
}

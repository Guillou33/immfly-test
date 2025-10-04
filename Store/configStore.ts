import { configureStore } from "@reduxjs/toolkit";
import devToolsEnhancer from 'redux-devtools-expo-dev-plugin';

import productReducer from "./Reducer/ProductReducer";
import basketReducer from "./Reducer/BasketReducer";

export const store = configureStore({
  reducer: {
    product: productReducer,
    basket: basketReducer,
  },
  devTools: false,
  enhancers: getDefaultEnhancers => getDefaultEnhancers().concat(devToolsEnhancer()),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

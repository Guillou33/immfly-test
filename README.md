# Welcome to Sodas app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Create env file and insert :
   ```bash
   echo 'API_URL = https://my-json-server.typicode.com/Guillou33/immfly-test-api' > .env.local
   ```

3. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

# Packages :

- State management : [Redux](https://redux.js.org/)
- UI : [React-native-paper](https://callstack.github.io/react-native-paper/)

# Fonctionalities :

- User can select multiple sodas and drop itinto a basket
- User can select the currency of the prices
- User can select price types (happy hour, retail, etc)
- User can choose to pay with creadit card or by cash

# Technical :

The code is written in **TypeScript** for type safety and better IntelliSense support.

## Api :

### Overview
The `ApiClient` class provides a simple abstraction layer over the native **Fetch API**, allowing you to perform standard HTTP requests (`GET`, `POST`, `PUT`, `DELETE`) with built-in support for authentication tokens and JSON handling.

---

### 🧱 Class Definition

```ts
class ApiClient {
  private baseURL: string;
  private headers: HeadersInit;

  constructor(baseURL: string);
  getBaseURL(): string;
  setAuthToken(token: string): void;
  get<T>(endpoint: string): Promise<T>;
  post<T>(endpoint: string, data: any): Promise<T>;
  put<T>(endpoint: string, data: any): Promise<T>;
  delete<T>(endpoint: string): Promise<T>;
}
```

### Call example :
```ts
  const api = new ApiClient(Constants.expoConfig?.extra?.apiUrl);

  const data = await api.post<{status: string}>('/payment', {method: paymentMethod, amount, currency: selectedCurrency});
```

## App :
The `app` folder correspond to the basic React Native Expo architecture.

## Components :
The `components` folder correspond to the basic React Native Expo architecture.

From Redux : a connection map from state to props are established in components in addition to useSelector.
Example with the list of products component :
```ts
const mapStateToProps = (state: RootState) => ({
  products: state.product.products,
  basket: state.basket.basket,
});
const mapActionsToProps = (dispatch: any) => ({
  updateBasket: (product: IProduct, quantity: number) => dispatch(updateBasket({product, quantity})),
  handleStock: (product: IProduct, quantity: number) => dispatch(handleStock(product, quantity)),
});

const ProductsList = connect(mapStateToProps, mapActionsToProps)(_ProductsList);
```

## Constants :
The `constants` folder includes the types, enum and interfaces of a typescript project.
It can also provide data formatting with the `format` folder where data shared between the app state and the Api is managed.

## Store :
The project contains one folder /Store for the state management of the variables. It includes :
- a `configStore.ts` file initializing the store allowing to communicate data through components.
- an `Action` folder containing the actions triggered while user interact with a functionnality.
  <b>This is mostly there that we handle up-to-date and consistent data between the Api and the app.</b>
Example with the basket updated :
```ts
// Call the App dispatch
export const updateBasket = (payload:{product: IProduct, quantity: number}) => (dispatch: AppDispatch) => _updateBasket(dispatch, payload);


// Dispatch to the store
export const _updateBasket = async (dispatch: AppDispatch, {product, quantity}: {product: IProduct, quantity: number}) => {
    // HERE WE CAN INSERT API CALLS
    // Example : await sendPayment(method, amount, selectedCurrency);
    // -> See ## Api section
    await dispatch({type: ActionTypes.UPDATE_BASKET, payload: {
              productId: product.id,
              quantity: quantity,
              price: product.price
        }});
};

```
- a `Reducer` folder managing the state of each object related to the App.

## Hooks :
A `hooks` folder is created to allow developers to add custom hooks. Example :

```ts
const useAnimatedBottomBar = (visible: number, animatedValue: Animated.Value) => {

  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: visible ? 0 : -100,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  return {
    transform: [{ translateY: animatedValue }],
  };
}

export default useAnimatedBottomBar;
```

The custom hook useAnimatedBottomBar manages the animation of a bottom bar in a React Native application.
It uses React Native’s Animated API to smoothly show or hide the bar with a vertical translation animation.


## Lib :
Used to create custom function for UX, UI, calclating functions, etc.
This is useful for easier access, updates, and efficient specific data management in applications.
Example :

```ts
export const formatProducts = (products: ApiProduct[]) => {
    return products.reduce((acc, product) => {
        acc[product.id] = {
            id: product.id,
            title: product.name,
            price: {
                [Currency.EUR]: product.price.euro,
                [Currency.USD]: product.price.dollar,
                [Currency.GBP]: product.price.pound
            },
            initialStock: product.stock,
            stock: product.stock,
            img: product.img
        };
        return acc;
    }, {} as Product);
}
```

The `formatProducts` function transforms an array of product objects (`ApiProduct[]`) into a normalized object keyed by product IDs.

# 🥤 Welcome to **Sodas App**

A modern **React Native + Expo** application that allows users to select, manage, and purchase sodas with multiple currencies and payment options.

---

## 🚀 Project Overview

This project was created using [**create-expo-app**](https://www.npmjs.com/package/create-expo-app) and leverages the power of:
- ⚛️ React Native (Expo)
- 🧠 Redux for global state management
- 🎨 React Native Paper for UI components
- 🧩 TypeScript for strong typing and IDE IntelliSense

---

## 📦 Installation & Setup

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Create a `.env` File
Add your API URL to the environment file:
```bash
echo 'API_URL=https://my-json-server.typicode.com/Guillou33/immfly-test-api' > .env
```

### 3️⃣ Start the Application
```bash
npx expo start
```

Once started, you can run the app in:

- [Development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go) (for quick previews)

---

## 🧭 Project Structure

```
sodas-app/
├── app/              # Main application screens and navigation
├── api/              # Communication with back-end / API
├── components/       # Reusable UI components
├── constants/        # Types, enums, and shared definitions
├── hooks/            # Custom React hooks
├── lib/              # Helper and data formatting utilities
├── store/            # Redux store configuration, reducers, and actions
├── .env              # Environment variables
```

---

## ⚙️ Features

- 🥤 Select multiple sodas and add them to a basket
- 💱 Choose display currency (EUR, USD, GBP)
- 🕒 Toggle price types (e.g., *Happy Hour*, *Retail*)
- 💳 Choose payment method (*Credit Card* or *Cash*)

---

## 🧠 Technical Details

### 🧾 Codebase
Written entirely in **TypeScript** for better maintainability, scalability, and type safety.

---

## 🧩 API Client

### Overview
The `ApiClient` class provides an abstraction over the native **Fetch API**, offering a simple interface for REST requests (`GET`, `POST`, `PUT`, `DELETE`) with JSON handling and optional authentication.

### Definition
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

### Example Usage
```ts
const api = new ApiClient(Constants.expoConfig?.extra?.apiUrl);

const data = await api.post<{ status: string }>('/payment', {
  method: paymentMethod,
  amount,
  currency: selectedCurrency,
});
```

---

## 🧱 Application Architecture

### `api/`
See 🧩 API Client section above.

### `app/`
Contains screens, navigators, and routes following [Expo’s file-based routing](https://docs.expo.dev/router/introduction/).

### `components/`
Includes UI components connected to Redux state.

Use of state in reducers and actions to dispatch state in the Store.
Example: **ProductsList**
```ts
const mapStateToProps = (state: RootState) => ({
  products: state.product.products,
  basket: state.basket.basket,
});

const mapActionsToProps = (dispatch: any) => ({
  updateBasket: (product: IProduct, quantity: number) =>
    dispatch(updateBasket({ product, quantity })),
  handleStock: (product: IProduct, quantity: number) =>
    dispatch(handleStock(product, quantity)),
});

const ProductsList = connect(mapStateToProps, mapActionsToProps)(_ProductsList);
```

---

### `constants/`
Includes global **types**, **enums**, and **interfaces** used across the app.
Also contains a `format/` folder for handling data transformations between API and app state.

---

### `Store/` (Redux)
Centralized state management.

#### Structure
- `configStore.ts` → initializes the store
- `Actions/` → defines app actions triggered by user interactions (see example below).
- `Reducers/` → manages the state of specific features

#### Example
```ts
// BasketAction.ts
export const updateBasket =
  (payload: { product: IProduct; quantity: number }) =>
  (dispatch: AppDispatch) =>
    _updateBasket(dispatch, payload);

export const _updateBasket = async (
  dispatch: AppDispatch,
  { product, quantity }: { product: IProduct; quantity: number }
) => {
  // Optional API calls
  await dispatch({
    type: ActionTypes.UPDATE_BASKET,
    payload: {
      productId: product.id,
      quantity,
      price: product.price,
    },
  });
};
```

---

### `hooks/`
Custom React hooks to encapsulate reusable logic.

#### Example: `useAnimatedBottomBar`
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
};
```

> This hook animates a bottom bar using React Native’s `Animated` API, smoothly showing or hiding it with vertical translation.

---

### `lib/`
Contains helper functions and utility logic.

#### Example: `formatProducts`
```ts
export const formatProducts = (products: ApiProduct[]) => {
  return products.reduce((acc, product) => {
    acc[product.id] = {
      id: product.id,
      title: product.name,
      price: {
        [Currency.EUR]: product.price.euro,
        [Currency.USD]: product.price.dollar,
        [Currency.GBP]: product.price.pound,
      },
      initialStock: product.stock,
      stock: product.stock,
      img: product.img,
    };
    return acc;
  }, {} as Product);
};
```

> This utility normalizes an array of products into an object keyed by product ID for faster access and better state management.

---

## 🧰 Tech Stack

| Layer | Technology |
|-------|-------------|
| Framework | [Expo](https://expo.dev) |
| UI | [React Native Paper](https://callstack.github.io/react-native-paper/) |
| State Management | [Redux](https://redux.js.org/) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Data Handling | Custom API client & format utilities |

---

## 🧪 Testing & Development

You can use Expo’s developer tools to preview and debug your app:
- Press `r` to reload
- Press `m` to toggle menu
- Use **React Native Debugger** or **Flipper** for Redux inspection

---

## 🤝 Contributing

Contributions are welcome!
Please open a pull request or file an issue to improve functionality, performance, or documentation.

---

## 📄 License

This project is licensed under the **MIT License**.
See the [LICENSE](./LICENSE) file for details.

---

### 🧑‍💻 Author
**Guillou33**
📧 [Contact via GitHub Issues](https://github.com/Guillou33)

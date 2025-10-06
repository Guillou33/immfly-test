# Welcome to Sodas app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

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

## Api :

### Overview
The `ApiClient` class provides a simple abstraction layer over the native **Fetch API**, allowing you to perform standard HTTP requests (`GET`, `POST`, `PUT`, `DELETE`) with built-in support for authentication tokens and JSON handling.

This class is written in **TypeScript** for type safety and better IntelliSense support.

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

## App :
The `app` folder correspond to the basic React Native Expo architecture.

## Components :
The `components` folder correspond to the basic React Native Expo architecture.

## Constants :
The `constants` folder includes the types, enum and interfaces of a typescript project.
It can also provide data formatting with the `format` folder where data shared between the app state and the Api is managed.

## Store :
The project contains one folder /Store for the state management of the variables. It includes :
- a `configStore.ts` file initializing the store allowing to communicate data through components.
- an `Action` folder containing the actions triggered while user interact with a functionnality.
- a `Reducer` folder managing the state of each object related to the App.

## Hooks :
A `hooks` folder is created to allow developers to add custom hooks.

## Lib :
Used to create custom function for UX, UI, calclating functions, etc. Allow us to manipulate specific data.

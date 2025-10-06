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
The folder `api` contains an `ApiClient.ts` file where the class `ApiClient` contribute to the construction of http calls from the app. It includes :
- all HTTP requests (POST, GET, PUT, DELETE).
- possibility to insert Token / Authorization.

## App :
The `app` folder correspond to the basic React Native Expo architecture.

## Components :

The `components` folder correspond to the basic React Native Expo architecture.

## Constants :
The `constants` folder includes the types, enum and interfaces of a typescript project.
It can also provide data formatting with the `format` folder where data management for the state or the Api is needed.

## Store :

The project contains one folder /Store for the state management of the variables. It includes :
- a `configStore.ts` file initaliazing the store allowing to communicate data through components.
- an `Action` folder containing the actions triggered while user interact with a functionnality.
- a `Reducer` folder managing the state of each object related to the App.

## Hooks :

A `hooks` folder is created to allow developers to add custom hooks.

## Lib :

Used to create custom function for UX, UI, calclating functions, etc. Allow us to manipulate specific data.

## Envs

The environement variables is called inside the .env file.

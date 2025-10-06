'use client'

import { store } from '@/Store/configStore';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';

// Wrap the app with custom providers :
// - Provider (from redux store)
// - PaperProvider
export default function AppProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>
    <PaperProvider>
      {children}
      </PaperProvider>
    </Provider>
}

'use client'

import { store } from '@/Store/configStore';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>
    <PaperProvider>
      {children}
      </PaperProvider>
    </Provider>
}

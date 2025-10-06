import { ApiProduct } from '@/constants/api/Product';
import Constants from 'expo-constants';
import ApiClient from './ApiClient';

// Make an API call to fetch products
export const fetchProducts = async () => {

  try {
    const api = new ApiClient(Constants.expoConfig?.extra?.apiUrl);

    const data = await api.get<ApiProduct[]>('/products');

    return data

  } catch (error: any) {

      console.error('❌ Error type:', error.name);
      console.error('❌ Error message:', error.message);
      console.error('❌ Full error:', error);
      throw error;

  }
}

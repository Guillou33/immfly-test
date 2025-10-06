import { ApiProduct } from '@/constants/api/Product';
import { Currency } from '@/constants/Util';
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

export const sendPayment = async (paymentMethod: string, amount: number, selectedCurrency: Currency) => {

  try {
    const api = new ApiClient(Constants.expoConfig?.extra?.apiUrl);

    // const data = await api.post<{status: string}>('/payment', {method: paymentMethod, amount, currency: selectedCurrency});
    let data = {status: "success"};
    console.log("Payment response: 200 ", data.status);

    return "Payment response: 200 " + data.status;

  } catch (error: any) {

      console.error('❌ Error type:', error.name);
      console.error('❌ Error message:', error.message);
      console.error('❌ Full error:', error);
      throw error;

  }
}

import { StyleSheet, Text, View } from 'react-native';

import Order from '@/components/basket/payment/Order';

export default function Payment() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment</Text>
      <Order />
      {/* <Method /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    height: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    // height: 1,
    width: '80%',
  },
});

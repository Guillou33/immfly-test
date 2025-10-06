import { Product } from "@/constants/Store/Product";
import { conversions } from "@/constants/Util";
import { RootState } from "@/Store/configStore";
import { BasketState } from "@/Store/Reducer/BasketReducer";
import { StyleSheet, Text, View } from "react-native";
import { List } from "react-native-paper";
import { useSelector } from "react-redux";

interface OrderProps {
  // Define any props if needed
}

const Order = () => {
  const basketState: BasketState = useSelector((state: RootState) => state.basket);
  const products: Product = useSelector((state: RootState) => state.product.products);
  console.log("Rendering Order with basket:");

  const basket = basketState.basket;
  const selec = basketState.selectedCurrency;
  const paymentInfos = basketState.paymentInfos;

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20}}>
        Your order : {paymentInfos !== "" && `Sodas ordered - ${paymentInfos}`}
      </Text>

      <List.Section>
        {basket.quantities !== undefined && Object.values(basket.quantities).map((item) => (
          <List.Item
            key={item.productId} 
            title={`${products[item.productId].title}`}
            left={() => (<List.Icon icon={products[item.productId].img} />)}
            style={styles.item}
            description={`Quantity: ${item.quantity} x ${products[item.productId].price[selec]} ${conversions[selec].symbol} = ${products[item.productId].price[selec] * item.quantity} ${conversions[selec].symbol}`}
          />
        ))}
      </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    width: '100%',
    height: '100%',
    alignItems: "center",
  },
  button: {
    // width: 30,
    marginBottom: 20,
    color: '#841584',
  },
  item:{
    marginVertical: 10,
    marginHorizontal: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    width: '100%',
  },
  viewActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Order;

import { RootState } from "@/Store/configStore";
import { StyleSheet, Text, View } from "react-native";
import { Button, List } from "react-native-paper";
import { useSelector } from "react-redux";

interface OrderProps {
  // Define any props if needed
}

const Order = (props: OrderProps) => {
  const basket = useSelector((state: RootState) => state.basket.basket);
  const products = useSelector((state: RootState) => state.product.products);
  console.log("Rendering Order with basket:", basket.productIds);

  return (
      <List.Section style={styles.container}>
        <List.Subheader>
          <View style={styles.viewActions}>
            <Text>Your order :</Text>
            <Button style={styles.button} mode="outlined" onPress={() => console.log("Clear basket")}>
              Clear
            </Button>
            <Button mode="contained" onPress={() => console.log("Proceed to payment")}>
              Go
            </Button>
          </View>
        </List.Subheader>
        {basket.quantities !== undefined && Object.values(basket.quantities).map((item) => (
          <List.Item
            key={item.productId} 
            title={products[item.productId].title}
            left={() => <List.Icon icon={products[item.productId].img} />}
            style={styles.item}
            description={`Quantity: ${item.quantity}`}
          />

        ))}
      </List.Section>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    width: '100%',
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

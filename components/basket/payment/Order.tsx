import { RootState } from "@/Store/configStore";
import { List } from "react-native-paper";
import { useSelector } from "react-redux";

interface OrderProps {
  // Define any props if needed
}

const Order = (props: OrderProps) => {
  const basket = useSelector((state: RootState) => state.basket.basket);
  const products = useSelector((state: RootState) => state.product.products);
  console.log("Rendering Order with basket:", basket.productIds);

  return (
      <List.Section>
        <List.Subheader>OrderScreen</List.Subheader>
        {basket.quantities !== undefined && Object.values(basket.quantities).map((item) => (
          // <View key={item.productId}>
          //   <Text>{products[item.productId].title} - Quantity: {item.quantity}</Text>
          // </View>
          <List.Item key={item.productId} title={products[item.productId].title} left={() => <List.Icon icon={products[item.productId].img} />} />

        ))}
      </List.Section>
  );
};

export default Order;

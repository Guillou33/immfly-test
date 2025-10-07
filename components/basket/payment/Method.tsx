import { IBasket, IPaymentMethod } from "@/constants/Store/Basket";
import { conversions } from "@/constants/Util";
import { getTotal } from "@/lib/conversion";
import { RootState } from "@/Store/configStore";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

interface PaymentMethodProps {
  // Inherit from parent component
  basket: IBasket;
  onSetPayment: (method: IPaymentMethod) => void;
}

const PaymentMethod = (props: PaymentMethodProps) => {
  const { basket, onSetPayment } = props;
  const selectedCurrency = useSelector((state: RootState) => state.basket.selectedCurrency);
  const selectedPriceType = useSelector((state: RootState) => state.basket.selectedPriceType);

  return (
    <View style={styles.container}>
      <View style={{alignItems: "center"}}>
        <Text style={{fontWeight: "bold", fontSize: 24, marginBottom: 10}}>
          Total Price : {getTotal(basket.totalPrices, selectedCurrency, selectedPriceType) ?? 0} {conversions[selectedCurrency].symbol}
        </Text>
      </View>
      <View style={styles.selectPriceType}>
        <TouchableOpacity style={[styles.button, {marginRight: 10}]} onPress={() => onSetPayment(IPaymentMethod.CARD)}>
          <Text style={styles.buttonText}>Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {marginLeft: 10}]} onPress={() => onSetPayment(IPaymentMethod.CASH)}>
          <Text style={styles.buttonText}>Efectivo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: "space-between",
    borderColor: "#ccc",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  selectPriceType: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10
  },
  button: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 8,
    width: '40%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  }
});

export default PaymentMethod;

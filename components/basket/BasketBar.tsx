import { IBasket } from "@/constants/Store/Basket";
import { Currency, getTotal } from "@/lib/conversion";
import { updateSelectedCurrency } from "@/Store/Action/BasketAction";
import { AppDispatch, RootState } from "@/Store/configStore";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { connect, useSelector } from "react-redux";
import CurrencyPicker from "./CurrencyPicker";

interface BasketBarProps {
  showSnackbar: boolean;
  setSnackbarVisible: (visible: boolean) => void;
  updateSelectedCurrency: (currency: string) => void;
  basket: IBasket;
}

const _BasketBar = (props: BasketBarProps) => {
  const { showSnackbar, setSnackbarVisible, updateSelectedCurrency, basket } = props;
  const router = useRouter();
  const selectedCurrency = useSelector((state: RootState) => state.basket.selectedCurrency); // This should be managed via state or props

  return (
        <View style={styles.basketbarView}>
          <Text>
            Total Price :
          </Text>
          <CurrencyPicker
            total={getTotal(basket.totalPrices) ?? 0}
            selectedCurrency={selectedCurrency}
            setSelectedCurrency={(currency: string) => {
              let newCurrency = currency as Currency;
              if (!Object.values(Currency).includes(newCurrency)) {
                newCurrency = Currency.EUR; // Default to EUR if invalid
              }
              // Dispatch action to update selected currency in the store
              // Assuming you have an action defined for this purpose
              updateSelectedCurrency(newCurrency);
            }}
          />
          <Button mode="contained" onPress={() => {
            router.navigate('/payment');
          }}>
            View Basket
          </Button>
        </View>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
  basketbarView: {
    flexDirection: "row",
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

});

const mapStateToProps = (state: RootState) => ({
  basket: state.basket.basket,
});

const mapActionsToProps = (dispatch: AppDispatch) => ({
  updateSelectedCurrency: (currency: Currency) => dispatch(updateSelectedCurrency(currency)),
});


const BasketBar = connect(mapStateToProps, mapActionsToProps)(_BasketBar);

export default BasketBar;

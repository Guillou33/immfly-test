import { AppDispatch, RootState } from "@/Store/configStore";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Snackbar } from "react-native-paper";
import { connect } from "react-redux";
import CurrencyPicker from "./CurrencyPicker";

interface BasketBarProps {
  showSnackbar: boolean;
  setSnackbarVisible: (visible: boolean) => void;
  basket: RootState["basket"]["basket"];
}

const _BasketBar = (props: BasketBarProps) => {
  const { showSnackbar, setSnackbarVisible, basket } = props;
  const router = useRouter();

  return (
      <Snackbar
        visible={showSnackbar}
        onDismiss={() => setSnackbarVisible(!showSnackbar)}
        duration={Number.POSITIVE_INFINITY} // Reste affiché indéfiniment
        action={{
          label: 'Pay',
          onPress: () => {
            router.navigate("/payment");
          },
        }}>
        <View style={styles.snackbarView}>
          <Text>Total Items: {basket.productIds.reduce((total, id) => total + (basket.quantities[id]?.quantity || 0), 0)}</Text>
          <CurrencyPicker />
        </View>
      </Snackbar>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
  snackbarView: {
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
});


const BasketBar = connect(mapStateToProps, mapActionsToProps)(_BasketBar);

export default BasketBar;

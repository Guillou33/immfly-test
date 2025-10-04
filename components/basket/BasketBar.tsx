import React from "react";
import { StyleSheet, View } from "react-native";
import CurrencyPicker from "./CurrencyPicker";

const BasketBar = () => {
  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        {/* <Button
          onPress={}
          title="Payment"
          accessibilityLabel="Go to payment screen"
          // style={styles.button}
        /> */}
        <CurrencyPicker />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default BasketBar;

import { IBasket } from "@/constants/Store/Basket";
import { PriceType } from "@/constants/Store/Product";
import { conversions, Currency } from "@/constants/Util";
import {  getTotal } from "@/lib/conversion";
import { updatePriceType, updateSelectedCurrency } from "@/Store/Action/BasketAction";
import { AppDispatch, RootState } from "@/Store/configStore";
import { useRouter } from "expo-router";
import { useCurrencyList } from "hooks/useCurrencyList";
import { usePriceTypeList } from "hooks/usePriceTypeList";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { PaperSelect } from 'react-native-paper-select';
import { connect, useSelector } from "react-redux";

interface BasketBarProps {
  showSnackbar: boolean;
  setSnackbarVisible: (visible: boolean) => void;
  updateSelectedCurrency: (currency: Currency) => void;
  updatePriceType: (priceType: PriceType) => void;
  basket: IBasket;
}

const _BasketBar = (props: BasketBarProps) => {
  const { showSnackbar, setSnackbarVisible, updateSelectedCurrency, updatePriceType, basket } = props;
  const router = useRouter();
  const selectedCurrency: Currency = useSelector((state: RootState) => state.basket.selectedCurrency); // This should be managed via state or props
  const selectedPriceType: PriceType = useSelector((state: RootState) => state.basket.selectedPriceType); // This should be managed via state or props

  const currencies = useCurrencyList();
  const priceTypes = usePriceTypeList();

  return (
        <View style={styles.basketbarView}>
          <View style={{marginBottom: 10}}>
            <Text>
              Total price: {getTotal(basket.totalPrices, selectedCurrency, selectedPriceType).toString() ?? 0} {conversions[selectedCurrency].symbol}
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
            <View style={{width: '20%'}}>
              <PaperSelect
                label={conversions[selectedCurrency].symbol}
                value={currencies.currency.value}
                onSelection={(value: any) => {
                  currencies.setCurrency({
                    ...currencies.currency,
                    value: value.text,
                    selectedList: value.selectedList,
                    error: '',
                  });
                  updateSelectedCurrency(value.selectedList[0]._id as Currency);
                }}
                arrayList={[...currencies.currency.list]}
                selectedArrayList={[...currencies.currency.selectedList]}
                errorText={currencies.currency.error}
                hideSearchBox={true}

                textInputMode="outlined"
                multiEnable={false}
                selectAllEnable={false}
                dialogTitleStyle={{ color: 'red' }}
                theme={{
                  colors:  {
                    placeholder: 'black'
                  },
                }}
              />
            </View>
            <View style={{marginLeft: 10, width: '50%'}}>
              <PaperSelect
                label={selectedPriceType}
                value={priceTypes.priceType.value}
                onSelection={(value: any) => {
                  priceTypes.setPriceType({
                    ...priceTypes.priceType,
                    value: value.text,
                    selectedList: value.selectedList,
                    error: '',
                  });
                  updatePriceType(value.selectedList[0]._id as PriceType);
                }}
                arrayList={[...priceTypes.priceType.list]}
                selectedArrayList={[...priceTypes.priceType.selectedList]}
                errorText={priceTypes.priceType.error}
                hideSearchBox={true}
                textInputMode="outlined"
                multiEnable={false}
                selectAllEnable={false}
                dialogTitleStyle={{ color: 'red' }}
                theme={{
                  colors:  {
                    placeholder: 'black'
                  },
                }}
              />
            </View>
            <View style={{width: '20%', marginLeft: 10}}>

              <Button mode="contained" onPress={() => {
                router.navigate('/payment');
              }}>
                Go
              </Button>
            </View>
          </View>
        </View>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
  basketbarView: {
    flexDirection: "column",
    // alignItems: "center",
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
  updateSelectedCurrency: (currency: Currency) => dispatch(updateSelectedCurrency(currency as Currency)),
  updatePriceType: (priceType: PriceType) => dispatch(updatePriceType(priceType as PriceType)),
});


const BasketBar = connect(mapStateToProps, mapActionsToProps)(_BasketBar);

export default BasketBar;


import { Image, StyleSheet, Text, View } from 'react-native';

import { BasketState } from '@/Store/Reducer/BasketReducer';
import { AppDispatch, RootState } from '@/Store/configStore';
import { IProduct } from '@/constants/Store/Product';
import { conversions } from '@/constants/Util';
import { getPriceType } from '@/lib/conversion';
import React from 'react';
import { Button, Card } from 'react-native-paper';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { connect } from 'react-redux';

interface ProductItemProps {
  product: IProduct;
  basket: BasketState;
  onUpdateBasket: (product: IProduct, quantity: number) => void;
  onHandleStock: (product: IProduct, quantity: number) => void;
}

const _ProductItem = (props: ProductItemProps) => {
  const {product, basket, onUpdateBasket, onHandleStock} = props;

  const basketInfo = basket.basket
  const selectedCurrency = basket.selectedCurrency; // This should be managed via state or props
  const selectedPriceType = basket.selectedPriceType; // This should be managed via state or props

  const [disableAdd, setDisableAdd] = React.useState(basketInfo.quantities[product.id] !== undefined ? basketInfo.quantities[product.id].quantity >= product.initialStock : false);
  const [disableLess, setDisableLess] = React.useState(basketInfo.quantities[product.id] === undefined ? true : basketInfo.quantities[product.id].quantity < 1 ? true : false);

  const onUpdateOrder = (product: IProduct, quantity: number) => {
    onUpdateBasket(product, quantity);
    onHandleStock(product, quantity*-1);
    setDisableAdd(basketInfo.quantities[product.id] ? basketInfo.quantities[product.id].quantity + quantity >= product.initialStock : false);
    setDisableLess(basketInfo.quantities[product.id] ? basketInfo.quantities[product.id].quantity + quantity < 1 : false);
  }

  return (
      <SafeAreaProvider style={styles.container}>
        <Card style={styles.card}>
          <View>
            <Text>{product.title}</Text>
            <Image
                style={styles.tinyLogo}
                source={{
                  uri: product.img,
                }}
            />
            <Text>
              Price : {getPriceType(product.price[selectedCurrency], selectedPriceType).toFixed(2)} {conversions[selectedCurrency].symbol}
            </Text>
            <Text>Stock : {product.stock}</Text>
            <View style={styles.btnView}>
              <Button style={styles.button_1} disabled={disableAdd} mode="contained" onPress={() => onUpdateOrder(product, 1)}>
                +
              </Button>
              <Button style={styles.button_2} mode="outlined" disabled={disableLess} onPress={() => onUpdateOrder(product, -1)}>
                -
              </Button>
            </View>
          </View>
        </Card>
      </SafeAreaProvider>
  );
};

const mapStateToProps = (state: RootState) => ({
  basket: state.basket,
});

const mapActionsToProps = (dispatch: AppDispatch) => ({
});

const ProductItem = connect(mapStateToProps, mapActionsToProps)(_ProductItem);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 150,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,

  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  btnView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingRight: 10
  },
  button_1: {
    marginRight: 5,
    borderColor: 'white',
    backgroundColor: '#841584',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    width: 50,
  },
  button_2: {
    marginLeft: 5,
    borderColor: '#841584',
    backgroundColor: 'white',
    color: '#841584',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    width: "50%",
  },
});

export default ProductItem;

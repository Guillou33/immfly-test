
import { Image, StyleSheet, Text, View } from 'react-native';

import { updateBasket } from '@/Store/Action/BasketAction';
import { handleStock } from '@/Store/Action/ProductAction';
import { AppDispatch, RootState } from '@/Store/configStore';
import { IBasket } from '@/constants/Store/Basket';
import { IProduct } from '@/constants/Store/Product';
import { Currency } from '@/lib/conversion';
import React from 'react';
import { Button, Card } from 'react-native-paper';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { connect } from 'react-redux';

interface ProductItemProps {
  product: IProduct;
  basket: IBasket;
  updateBasket: (product: IProduct, quantity: number) => void;
  handleStock: (product: IProduct, quantity: number) => void;
}

const _ProductItem = (props: ProductItemProps) => {
  const {product, basket, updateBasket, handleStock} = props;
  // console.log("Rendering Product Item:", basket.quantities[product.id]);
  // console.log("Rendering Product Item:", product);
  // console.log("Rendering Product Item:", product.id, product.title);

  const [disableAdd, setDisableAdd] = React.useState(basket.quantities[product.id] !== undefined ? basket.quantities[product.id].quantity >= product.initialStock : false);
  const [disableLess, setDisableLess] = React.useState(basket.quantities[product.id] === undefined ? true : basket.quantities[product.id].quantity < 1 ? true : false);

  const onUpdateBasket = (product: IProduct, quantity: number) => {
    updateBasket(product, quantity);
    handleStock(product, quantity*-1);
    setDisableAdd(basket.quantities[product.id] ? basket.quantities[product.id].quantity + quantity >= product.initialStock : false);
    setDisableLess(basket.quantities[product.id] ? basket.quantities[product.id].quantity + quantity < 1 : false);
  }
  console.log("Rendering Product Item:", disableAdd, disableLess);

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
            <Text>Price : </Text><Text>{product.price[Currency.EUR]} €</Text>
            <Text>Stock : {basket.quantities[product.id]!== undefined ? product.stock - basket.quantities[product.id].quantity : product.stock}</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-around", margin: 10 }}>
              <Button style={styles.button} disabled={disableAdd} mode="contained" onPress={() => onUpdateBasket(product, 1)}>
                +
              </Button>
              <Button mode="outlined" disabled={disableLess} onPress={() => onUpdateBasket(product, -1)}>
                -
              </Button>
            </View>
          </View>
        </Card>
      </SafeAreaProvider>
  );
};

const mapStateToProps = (state: RootState) => ({
  basket: state.basket.basket,
});

const mapActionsToProps = (dispatch: AppDispatch) => ({
  updateBasket: (product: IProduct, quantity: number) => dispatch(updateBasket({product, quantity})),
  handleStock: (product: IProduct, quantity: number) => dispatch(handleStock(product, quantity)),
});

const ProductItem = connect(mapStateToProps, mapActionsToProps)(_ProductItem);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  card: {
    width: '50%',
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
  button: {
    marginRight: 10,
    backgroundColor: '#841584',
    color: 'white',
    width: 20,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProductItem;

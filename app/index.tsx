import { StyleSheet, Text, View } from 'react-native';

import BasketBar from '@/components/basket/BasketBar';
import ProductsList from '@/components/product/ProductsList';
import { hydrateProducts } from '@/Store/Action/ProductAction';
import { AppDispatch, RootState } from '@/Store/configStore';
import { useVisibleSnackbar } from 'hooks/useVisibleSnackbar';
import React from 'react';
import { connect } from 'react-redux';
import { useHydrateProducts } from 'hooks/useHydrateRoducts';
import { Product } from '@/constants/Store/Product';

interface SodasScreenProps {
  products: Product;
  basket: RootState["basket"]["basket"];
  hydrateProducts: () => void;
}

function _SodasScreen(props: SodasScreenProps) {
  const {products, basket, hydrateProducts} = props;
  const {visibleSnackbar, setVisibleSnackbar} = useVisibleSnackbar(basket);

  useHydrateProducts(products, hydrateProducts);

  console.log("Rendering Sodas Screen with sodas:", Object.values(products));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Refrescos</Text>
      <ProductsList />
      <BasketBar showSnackbar={visibleSnackbar} setSnackbarVisible={setVisibleSnackbar} />
    </View>
  );
}

const mapStateToProps = (state: RootState) => ({
    products: state.product.products,
    basket: state.basket.basket,
});

const mapActionsToProps = (dispatch: AppDispatch) => ({
  hydrateProducts: () => dispatch(hydrateProducts()),
});

const SodasScreen = connect(mapStateToProps, mapActionsToProps)(_SodasScreen);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    justifyContent: 'center',
    height: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    // height: 1,
    width: '80%',
  },
});

export default SodasScreen;

import { StyleSheet, Text, View } from 'react-native';

import BasketBar from '@/components/basket/BasketBar';
import ProductsList from '@/components/product/ProductsList';
import { hydrateProducts } from '@/Store/Action/ProductAction';
import { AppDispatch, RootState } from '@/Store/configStore';
import React from 'react';
import { connect } from 'react-redux';

interface SodasScreenProps {
  products: RootState["product"]["products"];
  basket: RootState["basket"]["basket"];
  hydrateProducts: () => void;
}

function _SodasScreen(props: SodasScreenProps) {
  const {products, basket, hydrateProducts} = props;
  const [visibleSnackbar, setVisibleSnackbar] = React.useState(basket.productIds.length > 0);

  React.useEffect(() => {
    setVisibleSnackbar(basket.productIds.length > 0);
  }, [basket]);

  React.useEffect(() => {
    if(Object.keys(products).length === 0){
      hydrateProducts();
    }
  }, [products]);

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

import { Animated, StyleSheet, View } from 'react-native';

import BasketBar from '@/components/basket/BasketBar';
import ProductsList from '@/components/product/ProductsList';
import { Product } from '@/constants/Store/Product';
import { hydrateProducts } from '@/Store/Action/ProductAction';
import { AppDispatch, RootState } from '@/Store/configStore';
import useAnimatedBottomBar from 'hooks/useAnimatedBottomBar';
import { useHydrateProducts } from 'hooks/useHydrateRoducts';
import { useVisibleSnackbar } from 'hooks/useVisibleSnackbar';
import React from 'react';
import { connect } from 'react-redux';

interface SodasScreenProps {
  products: Product;
  basket: RootState["basket"]["basket"];
  hydrateProducts: () => void;
}

function _SodasScreen(props: SodasScreenProps) {
  const {products, basket, hydrateProducts} = props;
  const {visibleSnackbar, setVisibleSnackbar} = useVisibleSnackbar(basket);

  // Initial hydration of products :
  // - Use it only once when the component is mounted
  // - Use the products from the store to avoid re-fetching if already done
  // - Use the hydrateProducts action to fetch and store products if not already done
  useHydrateProducts(products, hydrateProducts);

  console.log("Rendering Sodas Screen with sodas:");

  const animatedValue = React.useRef(new Animated.Value(visibleSnackbar ? 0 : 100)).current;
  const animatedStyle = useAnimatedBottomBar(visibleSnackbar ? 1 : 0, animatedValue);

  return (
    <View style={styles.container}>
      <ProductsList />
      <Animated.View style={[styles.basketBar, animatedStyle]}>
        <BasketBar showSnackbar={visibleSnackbar} setSnackbarVisible={setVisibleSnackbar} />
      </Animated.View>
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
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    width: '80%',
  },
  basketBar: {
    width: '100%',
    paddingHorizontal: 10,
    justifyContent: 'center',
  }
});

export default SodasScreen;

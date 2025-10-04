import { StyleSheet } from 'react-native';

import ProductsList from '@/components/product/ProductsList';
import { Text, View } from '@/components/Themed';
import { _hydrateProducts } from '@/Store/Action/ProductAction';
import { AppDispatch, RootState } from '@/Store/configStore';
import React from 'react';
import { connect } from 'react-redux';

interface SodasScreenProps {
  products: Array<{ id: string; title: string }>;
  hydrateProducts: () => void;
}

function _SodasScreen(props: SodasScreenProps) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Refrescos</Text>
      <ProductsList />
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)">
        <ProductsList />
      </View> */}
    </View>
  );
}

const mapStateToProps = (state: RootState) => ({
    products: state.product.products,
});

const mapActionsToProps = (dispatch: AppDispatch) => ({
  hydrateProducts: () => dispatch(_hydrateProducts()),
});

const SodasScreen = connect(mapStateToProps, mapActionsToProps)(_SodasScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

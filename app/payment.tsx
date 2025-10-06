import { Animated, StyleSheet, Text, View } from 'react-native';

import Method from '@/components/basket/payment/Method';
import Order from '@/components/basket/payment/Order';
import { IBasket, IPaymentMethod } from '@/constants/Store/Basket';
import { clearBasket, setPaymentInfos } from '@/Store/Action/BasketAction';
import { AppDispatch, RootState } from '@/Store/configStore';
import useAnimatedBottomBar from 'hooks/useAnimatedBottomBar';
import { useVisibleSnackbar } from 'hooks/useVisibleSnackbar';
import React from 'react';
import { connect, useSelector } from 'react-redux';

interface PaymentProps {
  basket: IBasket;
  setPaymentInfos: (method: IPaymentMethod) => void;
  clearBasket: () => void;
}

export function _Payment(props: PaymentProps) {
  const { setPaymentInfos, clearBasket } = props;

  const basket = useSelector((state: RootState) => state.basket);
  const {visibleSnackbar} = useVisibleSnackbar(basket.basket);

  const animatedValue = React.useRef(new Animated.Value(visibleSnackbar ? 0 : 100)).current;
  const animatedStyle = useAnimatedBottomBar(visibleSnackbar ? 1 : 0, animatedValue);

  const setPayment = (method: IPaymentMethod) => {
    console.log("Payment method selected:", method);
    // Here you can handle the payment method selection logic
    // For example, you might want to update the Redux store or navigate to another screen
    // After handling payment, you might want to clear the basket
    setPaymentInfos(method as IPaymentMethod);
    clearBasket();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment</Text>
      {basket.paymentInfos !== "" && <Text>Sodas ordered - {basket.paymentInfos}</Text>}
      <Order />
      <Animated.View style={[styles.paymentMethod,
        { bottom: animatedStyle.transform[0].translateY }
        ]}>
        <Method basket={basket.basket} onSetPayment={setPayment} />
      </Animated.View>
    </View>
  );
}
const mapStateToProps = (state: RootState) => ({
    // products: state.product.products,
    basket: state.basket.basket,
});

const mapActionsToProps = (dispatch: AppDispatch) => ({
  setPaymentInfos: (method: IPaymentMethod) => dispatch(setPaymentInfos(method)),
  clearBasket: () => dispatch(clearBasket()),
});

const Payment = connect(mapStateToProps, mapActionsToProps)(_Payment);


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
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
  paymentMethod: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '30%',
    paddingHorizontal: 10,
    paddingBottom: 10,
    justifyContent: 'center',
  }
});

export default Payment;

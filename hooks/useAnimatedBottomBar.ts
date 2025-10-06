import React from "react";
import { Animated } from "react-native";

const useAnimatedBottomBar = (visible: number, animatedValue: Animated.Value) => {

  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: visible ? 0 : -100,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  return {
    transform: [{ translateY: animatedValue }],
  };
}

export default useAnimatedBottomBar;

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const PaymentMethod = () => {
  return (
    <View style={styles.overlay}>
        <Text style={styles.overlayText}>Je suis au premier plan!</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Action</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  overlayContent: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 15,
    alignItems: 'center',
  },
  overlayText: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  }
});

export default PaymentMethod;

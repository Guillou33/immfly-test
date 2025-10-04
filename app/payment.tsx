import { Button, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { useRouter } from 'expo-router';

export default function Payment() {
  const router = useRouter();
  const onPressBack = () => {
    router.back();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment</Text>
      <Button
        onPress={onPressBack}
        title="Back to Sodas"
        accessibilityLabel="Go back to sodas screen"
        // style={styles.button}
      />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </View>
  );
}

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

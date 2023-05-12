import { StyleSheet, Text, View } from 'react-native';

import * as ExpoZebraPrintModule from 'expo-zebra-print-module';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoZebraPrintModule.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

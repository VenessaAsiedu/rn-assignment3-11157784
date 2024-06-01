 import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>Hello , Devs</Text>
      <Text styles={styles.text}>15 tasks today</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    marginBottom: 5,
  }
});

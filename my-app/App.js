 import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>Hello , Devs</Text>
      <Text style={styles.text}>15 tasks today</Text>
      <Image source={require('./assets/Search.png')} style={styles.image} />
      <View style={styles.categoriesContainer}>
        <Text style={styles.categoriesText}>Categories</Text>
      </View>
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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    marginBottom: 5,
  },
  image: {
    width: 351,
    height: 50,
    marginTop: 10,
  },
  categoriesContainer: {
    marginTop: 20,
  },
  categoriesText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});

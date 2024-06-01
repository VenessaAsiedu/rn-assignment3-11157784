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
      <View style={styles.imageContainer}>
        <View style={styles.imageWithTextContainer}>
          <Text style={styles.imageText}>Exercise</Text>
          <Image source={require('./assets/young woman working online.png')} style={styles.categoryImage} />
        </View>
        <View style={styles.imageWithTextContainer}>
          <Text style={styles.imageText}>Study</Text>
          <Image source={require('./assets/young woman working at desk.png')} style={styles.categoryImage} />
        </View>
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
  imageContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  imageWithTextContainer: {
    alignItems: 'left',
    marginRight: 10,
  },
   imageText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
   },
  categoryImage: {
    width: 170,
    height: 180,
  },
});

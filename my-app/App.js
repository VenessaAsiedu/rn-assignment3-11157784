 import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
    <Text style={styles.boldText}>Hello , Devs</Text>
      <Image source={require('./assets/Icon.jpg')} style={styles.icon} />
    </View>
    <Text style={styles.text}>15 tasks today</Text>
      <Image source={require('./assets/Search.png')} style={styles.image} />
      <View style={styles.categoriesContainer}>
        <Text style={styles.categoriesText}>Categories</Text>
      </View>
      <View style={styles.imageContainer}>
        <View style={styles.imageWithTextContainer}>
        <View style={styles.imageBackground}>
        <Text style={styles.imageText}>Exercise</Text>
          <Text style={styles.subText}>15 Tasks</Text>
          <Image source={require('./assets/young woman working online.png')} style={styles.categoryImage} />
        </View>
        </View>
        <View style={styles.imageWithTextContainer}>
        <View style={styles.imageBackground}>
          <Text style={styles.imageText}>Study</Text>
          <Text style={styles.subText}>15 Tasks</Text>
          <Image source={require('./assets/young woman working at desk.png')} style={styles.categoryImage} />
          </View>
        </View>
      </View>
      <View>
      <Text style={styles.ongoing}>Ongoing Tasks</Text>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  boldText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
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
  imageBackground: {
    backgroundColor: 'white',
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
   subText: {
    fontSize: 14,
    marginBottom: 5,
   },
  categoryImage: {
    width: 170,
    height: 180,
  },
  ongoing: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

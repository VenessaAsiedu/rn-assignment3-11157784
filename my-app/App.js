import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [tasks, setTasks] = useState([
    { task: 'Mobile App Development', key: '1' },
    { task: 'Morning Yoga', key: '2' },
    { task: 'Preparing Dinner', key: '3' },
    { task: 'Science Project', key: '4' },
    { task: 'Watering Flowers', key: '5' },
    { task: 'Creating Database', key: '6' },
    { task: 'Reading Newspapers', key: '7' },
    { task: 'Watering Flowers', key: '8' },
    { task: 'Creating Database', key: '9' },
    { task: 'Reading Newspapers', key: '10' },
  ]);

  const renderTaskItem = ({ item }) => (
    <View style={styles.taskItem}>
      <Text style={styles.taskTitle}>{item.task}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello, Devs</Text>
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
      <Text style={styles.ongoing}>Ongoing Tasks</Text>
      <View style={styles.taskListContainer}>
        <FlatList
          data={tasks}
          renderItem={renderTaskItem}
          keyExtractor={item => item.key}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
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
    marginBottom: 10,
  },
  taskListContainer: {
    flex: 1,
    width: '100%',
  },
  taskItem: {
    padding: 20,
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
  },
  taskTitle: {
    fontSize: 20,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  icon: {
    width: 60,
    height: 60,
  },
});


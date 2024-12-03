import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DimensionExample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fahira Surya Adisty</Text>
      <View style={styles.row}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DADADC', 
  },
  text: {
    fontSize: 24, 
    color: 'blue', 
    fontWeight: 'bold', 
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '80%',
  },
  box1: {
    backgroundColor: '#496888', 
    width: 100,
    height: 100,
  },
  box2: {
    backgroundColor: '#811c43', 
    width: 100,
    height: 100, 
  },
});

export default DimensionExample;
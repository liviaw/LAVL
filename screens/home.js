import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Pet from '../components/Pet'

function HomeScreen() {
  return (
    <View style={styles.container }>
      <Pet /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20
  },
  tinyLogo: {
    width: 400,
    height: 300,
  },
});
export default HomeScreen;
import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Pet from '../components/Pet'

function HomeScreen(props) {
  return (
    
    <View style={styles.container }>
      <Pet happiness={props.happiness} setHappiness={props.setHappiness}/> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  tinyLogo: {
    width: 400,
    height: 300,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    padding: 90,
    
  },
});
export default HomeScreen;
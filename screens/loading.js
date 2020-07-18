import * as React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function LoadingScreen({ navigation }) {
  return (
    <View>
      <Image source={require('../assets/cat-walk.gif')} />
    </View>
  );
}

export default LoadingScreen;

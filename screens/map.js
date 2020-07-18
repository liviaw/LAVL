import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function MapScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>What would you like to do?</Text>
      <Button
        onPress={() => {
          navigation.navigate('Chat');
        }}
        title="Chat"
      />

      <Button
        onPress={() => {
          navigation.navigate('Game');
        }}
        title="Game"
      />
    </View>
  );
}

export default MapScreen;

import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/home';
import MapScreen from './screens/map';
import ChatScreen from './screens/chat';
import SettingsScreen from './screens/settings';
import LogIn from './screens/LogIn';
import SelectAvatar from './screens/SelectAvatar';
import GameScreen from './screens/game';
import LoadingScreen from './screens/loading';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [sign, setSign] = useState(1);
  const [happiness, setHappiness] = useState(50);
  function SignedIn () {
    setSign(2);
  }

  function HomePage() {
    setSign(4);
  }

  function sadPet() {
    setHappiness(50);
  }

  if (sign == 4) {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'ios-home' : 'md-home';
              } else if (route.name === 'Map') {
                iconName = focused ? 'ios-map' : 'md-map';
              } else if (route.name === 'Chat') {
                iconName = focused ? 'ios-chatboxes' : 'ios-chatbubbles';
              } else if (route.name === 'Game') {
                iconName = focused ? 'md-football' : 'md-football';
              }

              // You can return any component that you like here!

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'green',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Home">
          {() => <HomeScreen happiness={happiness} setHappiness={setHappiness} />}
            </Tab.Screen>
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Chat" component={ChatScreen} />
          <Tab.Screen name="Game" >
          {() => <GameScreen happiness={happiness} setHappiness={setHappiness} />}
            </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    );
  } else if (sign == 2) {
    return <SelectAvatar signedIn={HomePage} />;
  } else {
    return <LogIn signedIn={SignedIn} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

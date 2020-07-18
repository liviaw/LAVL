import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import HomeScreen from './screens/home';
import MapScreen from './screens/map';
import ChatScreen from './screens/chat';
import SettingsScreen from './screens/settings';

const screens = {
  Home: {
    screen: Home,
  },
  Chat: {
    screen: Chat,
  },
  Game: {
    screen: Game,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);

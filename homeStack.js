import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import HomeScreen from './screens/home';
import MapScreen from './screens/map';
import ChatScreen from './screens/chat';
import SettingsScreen from './screens/settings';
import LoadingScreen from './screens/loading';

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
  Loading: {
    screen: Loading,
  },
};

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

// const MyStack = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Loading" component={LoadingScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);

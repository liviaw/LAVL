import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/home';
import MapScreen from './screens/map';
import ChatScreen from './screens/chat';
import SettingsScreen from './screens/settings';
import LogIn from './screens/LogIn';
import SelectAvatar from './screens/SelectAvatar';
import GameScreen from './screens/game';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/';
import SimpleLineIcons from 'react-native-vector-icons/';

const Tab = createBottomTabNavigator();

export default function App() {
  const [sign, setSign] = useState(1);
  function SignedIn () {
    setSign(2);
  }

  function HomePage () {
    setSign(4);
  }
  
  if (sign == 4) {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-home'
                  : 'md-home';
              } else if (route.name === 'Map') {
                iconName = focused ? 'ios-map' : 'md-map';
              } else if (route.name==='Chat') {
                iconName = focused
                  ? 'ios-chatboxes'
                  : 'ios-chatbubbles';
              } else if (route.name==='Game') {
                iconName = focused
                  ? 'md-football'
                  : 'md-football';
              }

              // You can return any component that you like here!
              
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'purple',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Chat" component={ChatScreen} />
          <Tab.Screen name="Game" component={GameScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    )
  } else if (sign == 2) {
    return (
      <SelectAvatar signedIn={HomePage}/>
    )
  } else {
    return (<LogIn signedIn={SignedIn} />)
  };

   
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

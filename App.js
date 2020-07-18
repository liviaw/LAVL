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

const Tab = createBottomTabNavigator();

export default function App() {
  const [sign, setSign] = useState(1);
  const [happiness, setHappiness] = useState(50);
  function SignedIn () {
    setSign(2);
  }

  function HomePage () {
    setSign(4);
  }
  
  if (sign == 4) {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home">
          {() => <HomeScreen happiness={happiness} setHappiness={setHappiness} />}
            </Tab.Screen>
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Chat" component={ChatScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
          <Tab.Screen name="Game" >
          {() => <GameScreen happiness={happiness} setHappiness={setHappiness} />}
            </Tab.Screen>
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

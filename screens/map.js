import * as React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function MapScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('../assets/test.jpg')} />;
      <Text>What would you like to do?</Text>
      <Button
        onPress={() => {
          //   <Image source={require('../assets/test.jpg')} />;
          <Image
            style={styles.tinyLogo}
            source={require('../assets/jack-russel-looping.gif')}
          />;
          console.log('Wef');
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

// performTimeConsumingTask = async () => {
//   return new Promise((resolve) =>
//     setTimeout(() => {
//       resolve('result');
//     }, 3000)
//   );
// };

export default MapScreen;

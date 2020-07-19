import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function ChatScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Text>Chat!</Text> */}
      <Image style={styles.container} source={require('../assets/chat.gif')} />
    </View>
  );
}

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    width: 410,
    height: 900,
    // flex: 1,
    resizeMode: 'stretch',
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginTop: 10,
  },
});

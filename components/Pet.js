import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Rating } from 'react-native-elements';



export default class Pet extends React.Component {
  render() {
    return (
      <View>
        <Text> dsadsa</Text>
        <View style={styles.container}>
          <Rating
            type='heart'
            imageSize={20}
            readonly
            startingValue={4}
          />
          <Image
            style={styles.tinyLogo}
            source={require('../assets/jack-russel-looping.gif')}
          />
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch' }}>
            <View style={{ flex: 1, height: 50}} >
              <View><Text> Dog . Jack Russel</Text>
              </View>
              <View>
                <Text>John Smith</Text>
              </View>
            </View>
            <View style={{ flex: 1, height: 50, alignItems: 'flex-end' }} >
              <View>
                <Text> Birthdate</Text>
              </View>
              <View>
                <Text>
                  10 July 2020
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tinyLogo: {
    width: 400,
    height: 300,
  },
});

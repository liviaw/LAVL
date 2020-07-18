import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { Rating, Overlay } from 'react-native-elements';


export default class Pet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      happiness: 50,
      isVisible: false,
    }
  }

  render() {
    return (
      <View>
        <Overlay isVisible={this.state.isVisible}
          onBackdropPress={() => this.setState({ isVisible: false })}>
          Stats here
        </Overlay>
        <View>
          <Rating
            type='heart'
            imageSize={30}
            readonly
            startingValue={this.state.happiness / 100 * 5}
          />
          <TouchableHighlight onPress={() => this.setState({ isVisible: true })}>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/jack-russel-looping.gif')}
          />
          </TouchableHighlight>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch', marginHorizontal: 20 }}>
            <View style={{ flex: 1, height: 50 }} >
              <View><Text style={{ color: "grey" }}> Dog - Jack Russel</Text>
              </View>
              <View>
                <Text>John Smith</Text>
              </View>
            </View>
            <View style={{ flex: 1, height: 50, alignItems: 'flex-end' }} >
              <View>
                <Text style={{ color: "grey" }}> Birthdate</Text>
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
    marginTop: 20
  },
  tinyLogo: {
    width: 400,
    height: 300,
  },
});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import { Rating, Overlay } from 'react-native-elements';

export default class Pet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      age: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Overlay isVisible={this.state.isVisible}
          onBackdropPress={() => this.setState({ isVisible: false })}>
          <Text>Your pet grew!</Text>
        </Overlay>
        <View style={{marginTop: 50 }}>
          <Rating
            type='heart'
            imageSize={40}
            readonly
            startingValue={this.props.happiness / 100 * 5}
          />
          <Image
            style={this.age ? styles.mediumLogo  : styles.smallLogo} 
            source={require('../assets/jack-russel-looping.gif')}
          />
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch', marginHorizontal: 20 }}>
            <View style={{ flex: 1, height: 50 }} >
              <View><Text style={styles.boldText}> Dog - Beagle</Text>
              </View>
              <View>
                <Text style={styles.text}>Buddy The Good Boi</Text>
              </View>
            </View>
            <View style={{ flex: 1, height: 50, alignItems: 'flex-end' }}>
              <View>
                <Text style={styles.boldText}> Birthdate</Text>
              </View>
              <View>
                <Text style={styles.text}>10 July 2020</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    marginTop: 10,
    color: 'grey',
    fontSize: 12,
    fontWeight: 'bold',
  },
  boldText: {
    marginTop: 10,
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
  smallLogo: {
    width: 300,
    height: 200,
    marginVertical: 75,
  },
  mediumLogo: {
    width: 300,
    height: 300,
    marginBottom: 25,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    padding: 90,
  },
});

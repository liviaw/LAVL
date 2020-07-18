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
      <ImageBackground source={require('./backgreen.png')} style={styles.image}>
      <View style={styles.container}>
        <Overlay isVisible={this.state.isVisible}
          onBackdropPress={() => this.setState({ isVisible: false })}>
          <Text >Your pet grew!</Text>
        </Overlay>
        <Text style={styles.title}>Buddy's Profile</Text>
        <View style={{marginTop: 50 }}>
          <Rating
            type='heart'
            imageSize={40}
            readonly
            startingValue={this.props.happiness / 100 * 5}
          />
          <Image
            style={this.props.happiness > 50 ? styles.mediumLogo  : styles.smallLogo} 
            source={this.props.happiness > 80 ? require('../assets/jack-russel-looping.gif') : require('../assets/doggo.gif')}
          />
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch', marginHorizontal: 20 }}>
            <View style={{ flex: 1, height: 50 }} >
              <View><Text style={styles.boldText}> Dog - Beagle</Text>
              </View>
              <View>
                <Text style={styles.text}>Buddy The Good Boi</Text>
                <Text style={styles.tagTop}> Social life  </Text>
                <Text style={styles.tag}> Sleep  </Text>
                <Text style={styles.tag}> Walk </Text>
              </View>
            </View>
            <View style={{ flex: 1, height: 50, alignItems: 'flex-end' }}>
              <View>
                <Text style={styles.boldText}> Birthdate</Text>
              </View>
              <View>
                <Text style={styles.text}>10 July 2020</Text>
              </View>
            
              <View>
                
                <Rating
                imageSize={20}
                readonly
                startingValue={this.props.happiness / 100 * 5}
                style={styles.ratingTop}
              />
            </View>

            <View>
                
                <Rating
                imageSize={20}
                readonly
                startingValue={2}
                style={styles.rating}
              />
            </View>

            <View> 
                <Rating
                imageSize={20}
                type="custom"
                readonly
                startingValue={0}
                style={styles.rating}
              />
            </View>

          </View>
          </View>
        </View>
      </View>
      </ImageBackground>
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
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  rating: {
    marginTop: 25,
  },
  ratingTop: {
    marginTop: 49,
  },
  tag: {
    marginTop: 28,
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
  tagTop: {
    marginTop: 30,
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
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

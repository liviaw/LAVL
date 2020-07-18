import * as React from 'react';
import { StyleSheet, Text, View, Button, Image, Overlay, OverlayComponent, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MapView, { UrlTile }  from 'react-native-maps';
import ModalTester from './modal';


export default class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        
        <MapView
        style={styles.map}
        
        initialRegion={{
          latitude: -33.909990,
          longitude: 151.222970,
          latitudeDelta: 0.0982,
          longitudeDelta: 0.0421,
        }}
      >
        {/* <View style={styles.modal}>
          <Overlay isVisible={this.state.isVisible} >
          <Text>hi!</Text>
          </Overlay>
        </View> */}
        <ModalTester/>

        <MapView.Marker draggable
          coordinate={{
            latitude: -33.9173,
            longitude: 151.2313}}
          onDragEnd={(e) => this.setState({ x: e.nativeEvent.coordinate })}
        >
        <Image
        style={styles.gifLogo}
        source={require('../assets/jack-russel-looping.gif')}
      />
      </MapView.Marker>



      <MapView.Marker
        coordinate={{
          latitude: -33.849300,
          longitude: 151.182440,
        }}
        title="Sydey Opera House"
        description="dog"> 
          <Image
        style={styles.gifLogo}
        source={require('../assets/doggo.gif')}
      />
        </MapView.Marker>

        <MapView.Marker
        coordinate={{
          latitude: -33.849300,
          longitude: 151.182440,
        }}> 
          <Image
        style={styles.gifLogo}
        source={require('../assets/doggo.gif')}
      />
        </MapView.Marker>

        <MapView.Marker
        coordinate={{
          latitude: -33.849300,
          longitude: 150.182440,
        }}> 
          <Image
        style={styles.gifLogo}
        source={require('../assets/doggo.gif')}
      />
        </MapView.Marker>

        <MapView.Marker
        coordinate={{
          latitude: -32.849300,
          longitude: 155.182440,
        }}> 
          <Image
        style={styles.gifLogo}
        source={require('../assets/doggo.gif')}
      />
        </MapView.Marker>

        <MapView.Marker
        coordinate={{
          latitude: -33.8914,
          longitude: 151.2497,
        }}> 
          <Image
        style={styles.gifLogo}
        source={require('../assets/doggo.gif')}
      />
        </MapView.Marker>

        <MapView.Marker
        //accenture tower
        coordinate={{
          latitude: -33.849300,
          longitude: 151.192440,
        }}> 
          <Image
        style={styles.tinyLogo}
        source={require('./monkey.png')}
      />
        </MapView.Marker>
        <MapView.Marker
        //randwick
        coordinate={{
          latitude: -33.9132,
          longitude: 151.192440,
        }}> 
          <Image
        style={styles.tinyLogo}
        source={require('./monkey.png')}
      />
        </MapView.Marker>
        <MapView.Marker
        //randwick
        coordinate={{
          latitude: -33.9132,
          longitude: 151.2431,
        }}
        title="Sydey Opera House"
        description="dog"
        > 
          <Image
        style={styles.tinyLogo}
        source={require('./kitten.png')}
        onPress={() => {
          this.setState({ isVisible: true })
        }}
      
      />
        </MapView.Marker>

        <MapView.Marker isVisible={this.state.isVisible}
        //randwick
        coordinate={{
          latitude: -33.9142,
          longitude: 151.0931,
        }}> 

        <View  style={styles.mapViv} >
        <Text>What adventure do you want to go on?</Text>
        <View style={styles.controlSpace}>
          <View style={styles.buttonView}>
            <Button
              onPress={() => {
                navigation.navigate('Chat');
              }}
              title="Chat"
            />
          </View>
          <View style={styles.buttonView}>
            <Button
              onPress={() => {
                navigation.navigate('Game');
              }}
              title="Game"
            />
          </View>
        </View>
      </View>


        </MapView.Marker>


        <MapView.Marker
        //randwick
        coordinate={{
          latitude: -33.9152,
          longitude: 151.2420,
        }}> 
          <Image
        style={styles.tinyLogo}
        source={require('./dog.png')}
      />
        </MapView.Marker>

        <MapView.Marker
        coordinate={{
          latitude: -33.949300,
          longitude: 151.182440,
        }}> 
          <Image
        style={styles.tinyLogo}
        source={require('./dog.png')}
      />
        </MapView.Marker>

        <MapView.Marker
        coordinate={{
          latitude: -33.9132,
          longitude: 151.242,
        }}> 
          <Image
        style={styles.tinyLogo}
        source={require('./dog.png')}
      />
        </MapView.Marker>

        <MapView.Marker
        coordinate={{
          latitude: -33.909990,
          longitude: 151.222970,
        }}> 
          <Image
        style={styles.tinyLogo}
        source={require('./dog.png')}
      />
        </MapView.Marker>

        <MapView.Marker
        coordinate={{
          latitude: -33.949300,
          longitude: 151.152440,
        }}> 
          <Image
        style={styles.tinyLogo}
        source={require('../assets/cat.gif')}
      />
        </MapView.Marker>




        <MapView.Marker
        coordinate={{
          latitude: -33.849300,
          longitude: 151.152440,
        }}> 
          <Image
        style={styles.tinyLogo}
        source={require('../assets/cat.gif')}
      />
        </MapView.Marker>

        <MapView.Marker
        coordinate={{
          latitude: -35.849300,
          longitude: 150.152440,
        }}> 
          <Image
        style={styles.tinyLogo}
        source={require('./monkey.png')}
      />
        </MapView.Marker>
        <MapView.Marker
        coordinate={{
          latitude: -33.849300,
          longitude: 151.152840,
        }}> 
          <Image
        style={styles.tinyLogo}
        source={require('../assets/dog.png')}
      />
        </MapView.Marker>
        <MapView.Marker
        coordinate={{
          latitude: -33.949300,
          longitude: 151.002440,
        }}> 
          <Image
        style={styles.tinyLogo}
        source={require('../assets/cat.gif')}
      />
        </MapView.Marker>
        </MapView>



      
    </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

  },
  overlay: {
    position: 'absolute'
  },
  map: {
    left: 0,
    right:0,
    top:0,
    bottom: 0,
    position: 'absolute',

  },
  gifLogo: {
    width:100,
    height:100,
  },
  tinyLogo: {
    width:50,
    height:50,
    
  },

  mapViv: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    // position: relative;
    // backgroundColor: '#fff';
    // borderWidth: 40;
    // padding: 24;
    // text-align: center;
    // border-left: 24 solid #fff;
    // border-right: 12px solid transparent;
    // border-top: 12px solid #fff;
    // border-bottom: 20px solid transparent;
    // left: 32px;
    // bottom: -24px;
  },
  controlSpace: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'green',
  },
  buttonView: {
    width: '30%',
    padding: 10,
    borderWidth: 4,
    borderColor: 'white',
    borderRadius: 6,
    backgroundColor: '#c0d8ae',
  },

})


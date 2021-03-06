import * as React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
function MapScreen({ navigation }) {
  return (
    <View>
      <Image
        source={require('../assets/walking.gif')}
        style={styles.backgroundImage}
      />
    </View>

    // <React.Fragment>
    //   <View style={styles.map}>
    //     <Text>What adventure do you want to go on?</Text>
    //     <View style={styles.controlSpace}>
    //       <View style={styles.buttonView}>

    //         <Button
    //           color="#fff"
    //           onPress={() => {
    //             navigation.navigate('Chat');
    //           }}
    //           title="Chat"
    //         />
    //       </View>
    //       <View style={styles.buttonView}>
    //         <Button
    //           color="#fff"
    //           onPress={() => {
    //             navigation.navigate('Game');
    //           }}
    //           title="Game"
    //         />
    //       </View>
    //     </View>
    //   </View>

    //   {/* Travelling image - to be on loading screen */}
    //   <View>
    //     <Image source={require('../assets/cat-walk.gif')} />
    //   </View>

    //   {/* Two pets talking to each other */}
    //   {/* <View>
    //     <Image source={require('../assets/test.png')} />
    //   </View> */}
    // </React.Fragment>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    // flex: 1,
    resizeMode: 'stretch',
    width: 410,
    height: 700,
  },
  map: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcfafc',
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
    // backgroundColor: '#8E7EFB',
  },
  buttonView: {
    width: '30%',
    padding: 10,
    borderWidth: 4,
    borderColor: 'white',
    borderRadius: 6,
    backgroundColor: '#c0d8ae',
  },
});

// performTimeConsumingTask = async () => {
//   return new Promise((resolve) =>
//     setTimeout(() => {
//       resolve('result');
//     }, 3000)
//   );
// };

export default MapScreen;

import React, { Component } from 'react';
//import react in our code.
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { withNavigation } from 'react-navigation';

import { Modal, Button, View, Text, StyleSheet } from 'react-native';
//import all the components we are going to use.

export default class ModalTest extends Component {

  constructor(props) {
    super(props)
  }

  // navigation = useNavigation();
  state = {
    isVisible: false, //state of modal default false
  };
  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.isVisible}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          {/*All views of Modal*/}
          {/*Animation can be slide, slide, none*/}
          <View style={styles.modal}>

            <View  style={styles.mapViv} >
            <Text>What adventure do you want to go on?</Text>
            <View style={styles.controlSpace}>
              {/* <View style={styles.buttonView}> */}
              <Button
              title="Chat"
              onPress={() => {
                this.setState({ isVisible: !this.state.isVisible });
                // this.props.navigation.navigate('Chat');
              }}
            />
            
              {/* </View> */}
              {/* <View style={styles.buttonView}> */}
              <Button
              title="Game"
              onPress={() => {
                this.setState({ isVisible: !this.state.isVisible });
                // navigation.navigate('Game');
              }}
            />
            
              {/* </View> */}
              {/* <View style={styles.buttonView}>
              <Button
              title="Cancel"
              onPress={() => {
                this.setState({ isVisible: !this.state.isVisible });
              }}
            />
                </View> */}
            </View>
          </View>

            {/* <Button
              title="Chat"
              onPress={() => {
                this.setState({ isVisible: !this.state.isVisible });
                // this.props.navigation.navigate('Chat');
              }}
            />
            <Button
              title="Game"
              onPress={() => {
                this.setState({ isVisible: !this.state.isVisible });
                // navigation.navigate('Game');
              }}
            />
            <Button
              title="Cancel"
              onPress={() => {
                this.setState({ isVisible: !this.state.isVisible });
              }}
            /> */}
          </View>
        </Modal>

        {/*Button will change state to true and view will re-render*/}
        <Button
          title="Konnect!"
          onPress={() => {
            this.setState({ isVisible: true });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    marginTop: 30,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 100,
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
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
});



// import React, { Component } from 'react';
// import MapView, { UrlTile }  from 'react-native-maps';

// import { Modal, Text, Image, Button, TouchableHighlight, View, StyleSheet}

// from 'react-native'
// class ModalExample extends Component {
//    state = {
//       modalVisible: false,
//    }
//    toggleModal(visible) {
//       this.setState({ modalVisible: visible });
//    }
//    render() {
//       return (
//          <View style = {styles.container}>
//             <Modal animationType = {"slide"} transparent = {false}
//                visible = {this.state.modalVisible}
//                onRequestClose = {() => { console.log("Modal has been closed.") } }>
               

//                 <View style={styles.map}>
//                   <Text>What adventure do you want to go on?</Text>
//                   <View style={styles.controlSpace}>
//                     <View style={styles.buttonView}>

//                     <Button
//                       color="#d3d3d3"
//                       onPress={() => {
//                         navigation.navigate('Chat');
//                       }}
//                       title="Chat"
//                     />
//                   </View>
//                   <View style={styles.buttonView}>
//                     <Button
//                       color="#d3d3d3"
//                       onPress={() => {
//                         navigation.navigate('Game');
//                       }}
//                       title="Game"
//                     />
//                   </View>
//                   </View>

//                   <TouchableHighlight onPress = {() => {
//                      this.toggleModal(!this.state.modalVisible)}}>
                     
//                      <Text style = {styles.text}>Cancel</Text>
//                   </TouchableHighlight>
//                </View>
//                <View>
//                  <Image source={require('../assets/cat-walk.gif')} />
//               </View>
//             </Modal>
//             <View>
              
//               <TouchableHighlight onPress = {() => {this.toggleModal(true)}}>
//                 <Text style = {styles.text}>Open Modal</Text>
//               </TouchableHighlight>
       
//             </View>
//          </View>
//       )
//    }
// }
// export default ModalExample

// const styles = StyleSheet.create ({
//    container: {
//       alignItems: 'center',
//       backgroundColor: '#ede3f2',
//       padding: 100
//    },
//    modal: {
//       flex: 1,
//       alignItems: 'center',
//       // backgroundColor: '#f7021a',
//       padding: 100
//    },
//    text: {
//       color: '#3f2949',
//       marginTop: 10
//    },
//    backgroundImage: {
//     // flex: 1,
//     resizeMode: 'stretch',
//     width: 410,
//     height: 700,
//   },
//   map: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fcfafc',
//     // position: relative;
//     // backgroundColor: '#fff';
//     // borderWidth: 40;
//     // padding: 24;
//     // text-align: center;
//     // border-left: 24 solid #fff;
//     // border-right: 12px solid transparent;
//     // border-top: 12px solid #fff;
//     // border-bottom: 20px solid transparent;
//     // left: 32px;
//     // bottom: -24px;
//   },
//   controlSpace: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     // backgroundColor: '#8E7EFB',
//   },
//   buttonView: {
//     width: '30%',
//     padding: 10,
//     borderWidth: 4,
//     borderColor: 'white',
//     borderRadius: 6,
//     backgroundColor: '#c0d8ae',
//   },
// })

// // import React, {useState} from 'react';
// // import {Button, Text, View, StyleSheet} from 'react-native';
// // import Modal from 'react-native-modal';

// // function ModalTester() {
// //   const [isModalVisible, setModalVisible] = useState(false);
  
// //   const toggleModal = () => {
// //     setModalVisible(!isModalVisible);
// //   };

// //     return (
// //       <View style={styles.modal}>
// //         <Button title="Show modal" onPress={toggleModal} />

// //         <Modal isVisible={isModalVisible}>
// //           <View style={{flex: 1}}>
// //             <Text>Hello!</Text>

// //             <Button title="Hide modal" onPress={toggleModal} />
// //           </View>
// //         </Modal>
// //       </View>
// //     );
// // }
// // const styles = StyleSheet.create({
// // modal: {
// //     width:50,
// //     height:50,
// //     position:'absolute',
// //   }
// // })

// // export default ModalTester;
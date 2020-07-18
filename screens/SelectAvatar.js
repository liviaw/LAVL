  
import React, {useState} from 'react';
import LoginScreen from "react-native-login-screen";
import Dog from './Dog';
import { StyleSheet, ImageBackground, Text, View, TextInput, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SelectAvatar(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Choose Your Pet:</Text>
            <ImageBackground source={require('./back.png')} style={styles.image}>
            <Image
            style={styles.tinyLogo}
            source={require('./kitten.png')}
            />
            <TouchableOpacity style={styles.button} onPress={() => props.signedIn()}>
                <Text style={styles.buttonText}> PICK ME!  </Text>
            </TouchableOpacity>

            <Image
            style={styles.tinyLogo}
            source={require('./hamster.png')}
            />
            <TouchableOpacity style={styles.button} onPress={() => props.signedIn()}>
                <Text style={styles.buttonText}> PICK ME! </Text>
            </TouchableOpacity>


            <Image
            style={styles.tinyLogo}
            source={require('./puppy.png')}
            />
            <TouchableOpacity style={styles.button} onPress={() => props.signedIn()}>
          <Text style={styles.buttonText}> PICK ME! </Text>
        </TouchableOpacity>
        </ImageBackground>

        </View>
    )

}

const styles = StyleSheet.create({
    container : {
      backgroundColor: "#8E7EFB",
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
        marginTop: 100,
        color: "black",
        fontSize: 30,
        fontWeight: "bold"
      },
    tinyLogo: {
        width:100,
        height:100,
        marginVertical: 10,
        
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    button : {
        backgroundColor:'rgba(255, 255, 255, 0.3)',
        borderRadius: 25,
        marginVertical: 10, 
        paddingVertical: 12
    },
    buttonText: {
        fontSize:16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center',
      }
})
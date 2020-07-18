  
import React from 'react';
import LoginScreen from "react-native-login-screen";
import Logo from './dog.png';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function Dog() {
    const styles = StyleSheet.create({
        tinyLogo: {
            width:125,
            height:125,
            
        }
    });
    return (
        <Image
        style={styles.tinyLogo}
        source={require('./dog.png')}
      />
    )
}
  
import React from 'react';
import Logo from './dog.png';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function Dog() {
    const styles = StyleSheet.create({
        tinyLogo: {
            width:200,
            height:200,
            marginLeft: 17,
            
        }
    });
    return (
        <Image
        style={styles.tinyLogo}
        source={require('./dog.png')}
      />
    )
}
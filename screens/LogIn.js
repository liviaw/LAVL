  
import React, {useState} from 'react';
import Dog from './Dog';
import { StyleSheet, ImageBackground, Text, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function LogIn(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [value, onChangeText] = React.useState('Useless Placeholder');

  return (
    <View style={styles.container}>
    <ImageBackground source={require('./back-tree.png')} style={styles.image}>
    
      
        <Dog/>
        <Text style={styles.text}>K O N N E C T</Text>
        <TextInput style={styles.inputBox} 
          style={styles.inputBox }
          onChangeText={text => setUsername(text)}
          placeholderTextColor= '#ffffff'
          placeholder="Your pet's name"
        />
        <TextInput style={styles.inputBox} 
          style={styles.inputBox }
          onChangeText={text => setPassword(text)}
          placeholderTextColor= '#ffffff'
          secureTextEntry={true}
          placeholder="Your password"
        />

        <TouchableOpacity style={styles.button} onPress={() => props.signedIn()}>
          <Text style={styles.buttonText}> SIGN UP </Text>
        </TouchableOpacity>


</ImageBackground>
</View>
    )

    // height: 40, borderColor: 'black', borderWidth: 1
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    padding: 150,
  },
  text: {
    color: "black",
    fontSize: 26,
    fontWeight: "bold"
  },
  inputBox: {
    backgroundColor:'rgba(255, 255, 255, 0.3)',
    borderRadius:35,
    paddingHorizontal:26,
    fontSize:16,
    height: 56,
    color: '#ffffff',
    marginBottom: 10,
  },
  button : {
    backgroundColor:'rgba(255, 255, 255, 0.3)',
    borderRadius: 25,
    padding: 15,
    paddingHorizontal: 55,
    marginBottom: 90
  },
  buttonText: {
    fontSize:16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  }

})
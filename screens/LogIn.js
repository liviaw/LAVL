  
import React, {useState} from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function LogIn(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [value, onChangeText] = React.useState('Useless Placeholder');

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./back.png')} style={styles.image}>
        
        <Text style={styles.text}>K O N N E C T</Text>
        <TextInput style={styles.inputBox} 
          style={styles.inputBox }
          onChangeText={text => setUsername(text)}
          placeholderTextColor= '#ffffff'
          placeholder="Enter your username"
        />
        <TextInput style={styles.inputBox} 
          style={styles.inputBox }
          onChangeText={text => setPassword(text)}
          placeholderTextColor= '#ffffff'
          secureTextEntry={true}
          placeholder="Enter your password"
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
    backgroundColor: "#8E7EFB",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold"
  },
  inputBox: {
    backgroundColor:'rgba(255, 255, 255, 0.3)',
    borderRadius:35,
    paddingHorizontal:16,
    fontSize:16,
    height: 56,
    color: '#ffffff',
    marginVertical: 10,
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
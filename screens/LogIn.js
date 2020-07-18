  
import React, {useState} from 'react';
import LoginScreen from "react-native-login-screen";
import Dog from './Dog';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [value, onChangeText] = React.useState('Useless Placeholder');
  return (
<View>
<TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
    <LoginScreen 
    spinnerEnable
    logoText="Konnect" source={require('./dog.png')} 
    // usernameOnChangeText={(username) => setUsername(username)}
    // passwordOnChangeText={(password) => console.log("Password: ", password)}
    >
      

        <View
    style={{
      position: "relative",
      alignSelf: "center",
      marginTop: 64,
    }}
  >
    <Text style={{ color: "white", fontSize: 30 }}>
      Inside Login Screen Component
    </Text>
  </View>

    </LoginScreen>
    </View>

    )


}
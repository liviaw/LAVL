import React, {useState} from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import TicTacToe from './tictactoe';

function GameScreen(props) {
  const [currentPlayer, setCurrentPlayer] = useState(1);
    return (
      <View style={styles.container}>
        <View style={{alignItems: 'flex-end', marginTop: 20, marginBottom:100}}>
        <Image
              style={{width:150, height:150}}
              source={require('../assets/cat.gif')}
            />
        </View>
        <TicTacToe onChangePlayer={(player) => {setCurrentPlayer(player)}} happiness={props.happiness} setHappiness={props.setHappiness} />
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch', marginHorizontal: 20 }}>
          <View style={{ flex: 1, height: 50, marginTop: 20 }} >
            <Image
              style={{width:150, height:150}}
              source={require('../assets/jack-russel-looping.gif')}
            />
          </View>
        </View>
        <View >
          <Text style={{textAlign: 'center'}}>Current player: {currentPlayer == 1 ? "You" : "Opponent"}</Text>
        </View>
      </View>
    );
  
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tinyLogo: {
    width: 400,
    height: 300,
  },
});

export default GameScreen;
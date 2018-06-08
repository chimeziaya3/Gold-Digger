import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.gameBoard}>

        <View style={styles.skyContainer}>
          <Image source={require('./assets/nightsky.jpg')} style={styles.skyNightImage}/>
        </View>
        <View style={styles.undergroundContainer}>
          <Image source={require('./assets/underground.jpg')} style={styles.undergroundImage}/>
        </View>
        <View style={styles.controllerContainer}>
          <Image source={require('./assets/DirectionalButton.svg')} style={styles.controllerImage}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gameBoard: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  skyContainer: {
    position: 'relative',
    backgroundColor: '#ff4444',
    width: 'auto',
    height: '42,5%',
  },
  skyNightImage: {
    height: '100%',
    width: '100%',
  },
  undergroundContainer: {
    position: 'relative',
    backgroundColor: '#0026ff',
    width: 'auto',
    height: '42.5%',
  },
  undergroundImage: {
    width: '100%',
    height: '100%',
  },
  controllerContainer: {
    backgroundColor: 'green',
    width: 'auto',
    height: '15%',
  },
  controllerImage: {
    margin: 0 'auto',
  },
});

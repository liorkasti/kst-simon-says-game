import React from 'react'
import { ImageBackground, StyleSheet, Dimensions, useColorScheme } from 'react-native'
import { } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Background = ({ children }) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ImageBackground
      source={require('../assets/background_dot2x.png')}
      resizeMode="repeat"
      style={{ flex: 1, weight: windowWidth, height: windowHeight, backgroundColor: isDarkMode ? Colors.darker : Colors.lighter }}
    >
      {children}
    </ImageBackground >
  )
}

const styles = StyleSheet.create({})
export default Background;
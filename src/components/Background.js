import React from 'react'
import { ImageBackground, StyleSheet, Dimensions, useColorScheme } from 'react-native'
import { Colors as Theme } from 'react-native/Libraries/NewAppScreen';

import { HEIGHT, WIDTH } from '../constants/theme';

const Background = ({ children }) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ImageBackground
      source={require('../assets/background_dot2x.png')}
      resizeMode="repeat"
      style={{ flex: 1, weight: WIDTH, height: HEIGHT, backgroundColor: isDarkMode ? Theme.darker : Theme.lighter }}
    >
      {children}
    </ImageBackground >
  )
}

const styles = StyleSheet.create({})
export default Background;
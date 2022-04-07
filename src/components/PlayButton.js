import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { START_BTN } from '../constants/theme';
import { start } from '../constants/sounds';

const PlayButton = ({ navigation, active, sound }) => {

  const startText = "Play";

  const animatPlay = () => {
    start();
    setTimeout(() => { start() }, 1000);
    setTimeout(() => { start() }, 3000);
    setTimeout(() => { start() }, 2000);
  }

  const start = async () => { await sound.map(s => s.play()) }

  return (
    <TouchableOpacity
      active={active}
      style={START_BTN}
      onPress={() => animatPlay()}
    >
      <Text style={styles.text}>{startText}</Text>
    </TouchableOpacity >
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    fontSize: 26,
  },
});

export default PlayButton;

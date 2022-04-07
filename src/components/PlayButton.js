import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { START_BTN } from '../constants/theme';

const PlayButton = ({ onPress, disabled }) => {
  const startText = "Play";

  return (
    <TouchableOpacity
      disabled={disabled}
      style={START_BTN}
      onPress={onPress}>
      <Text style={styles.text}>{startText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    fontSize: 26,
  },
});

export default PlayButton;

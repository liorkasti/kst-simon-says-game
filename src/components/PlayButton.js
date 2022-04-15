import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { START_BTN } from '../constants/theme';

const PlayButton = ({ onPress, active, prompt }) => {

  return (
    <TouchableOpacity
      disabled={!active}
      style={START_BTN}
      onPress={onPress}
    >
      <Text style={styles.text}>{prompt}</Text>
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

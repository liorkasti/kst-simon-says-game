import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { BOARD_THEME, SEQUENCE_BTN } from '../constants/theme';

import { useSelector } from 'react-redux';

const SeqButton = ({ direction, btnColor, onPress, active, sound }) => {


  const directionStyle = { transform: [{ rotateZ: direction }] };

  const animatSequence = () => { sound.play(); }

  return (
    <View style={[BOARD_THEME, directionStyle]}>
      <TouchableOpacity
        style={[SEQUENCE_BTN, { borderColor: btnColor }]}
        active={active}
        onPress={() => animatSequence()}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SeqButton;

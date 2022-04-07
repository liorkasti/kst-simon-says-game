import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { BOARD, SEQUENCE_BTN } from '../constants/theme';

import { useSelector } from 'react-redux';

const SeqButton = ({ direction, btnColor, onPress, active = { active } }) => {

  const boardStyle = {
    transform: [{ rotateZ: direction }],
  };

  return (
    <View style={[BOARD, boardStyle]}>
      <TouchableOpacity
        style={[SEQUENCE_BTN, { borderColor: btnColor }]}
        active={active}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SeqButton;

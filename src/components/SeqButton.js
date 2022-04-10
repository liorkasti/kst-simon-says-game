import React, { useRef } from 'react';
import { StyleSheet, View, Animated, Pressable } from 'react-native';
import { BOARD_THEME, SEQUENCE_BTN } from '../constants/theme';

const SeqButton = ({ direction, btnColor, onPress, active, sound }) => {
  const animEffect = useRef(new Animated.Value(1)).current;
  const animDuration = 50;

  const animIn = () => {
    sound.play();
    sound.setNumberOfLoops(-1);
    Animated.timing(animEffect, {
      toValue: 1.1,
      duration: animDuration,
      useNativeDriver: true,
    }).start();
  };

  const animOut = () => {
    Animated.timing(animEffect, {
      toValue: 1,
      duration: animDuration,
      useNativeDriver: true,
    }).start(() => {
      sound.stop();
    });
  };

  const directionStyle = { transform: [{ rotateZ: direction }] };

  return (
    <View style={[BOARD_THEME, directionStyle]}>
      <Animated.View style={{ transform: [{ scale: animEffect }, { perspective: 1000 }] }}>
        <Pressable
          style={[SEQUENCE_BTN, { borderColor: btnColor }]}
          disabled={active}
          onPress={onPress}
          onPressIn={() => { animIn(); }}
          onPressOut={() => { animOut(); }}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SeqButton;

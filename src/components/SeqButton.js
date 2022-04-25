import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { StyleSheet, View, Animated, Pressable } from 'react-native';
import { BOARD_THEME, SEQUENCE_BTN } from '../constants/theme';

const SeqButton = (props, ref) => {

  const direction = props.direction;
  const btnColor = props.btnColor;
  const onPress = props.onPress;
  const active = props.active;
  const sound = props.sound;
  const animEffect = useRef(new Animated.Value(1)).current;
  const directionStyle = { transform: [{ rotateZ: direction }] };
  const animDuration = 20;

  useImperativeHandle(ref, () => ({
    pressEffect: () => { pressEffect(); }
  }));

  const pressEffect = () => {
    sound.play();
    Animated.sequence([
      Animated.timing(animEffect, {
        duration: animDuration,
        toValue: 1.1,
        useNativeDriver: true,
      }),
      Animated.delay(500),
      Animated.timing(animEffect, {
        duration: animDuration,
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start(() => {
      sound.stop();
    });
  };

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


  return (
    <View style={[BOARD_THEME, directionStyle]}>
      <Animated.View style={{ transform: [{ scale: animEffect }, { perspective: 1000 }] }}>
        <Pressable
          style={[SEQUENCE_BTN, { borderColor: btnColor }]}
          disabled={!active}
          onPress={onPress}
          onPressIn={() => animIn()}
          onPressOut={() => animOut()}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default forwardRef(SeqButton);
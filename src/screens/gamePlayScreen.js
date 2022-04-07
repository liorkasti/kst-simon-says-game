import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import BoardStack from '../components/BoardStack';
import PlayButton from '../components/PlayButton';

const GamePlayScreen = ({ navigation }) => {

  const startGameHandler = () => {
    console.log('play: ', navigation)
    navigation.setOptions({ tabBarVisible: false });
  };

  return (
    <View style={styles.mainContainer}>
      <BoardStack />
      <PlayButton onPress={() => startGameHandler()} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  buttonsContainer: {
    height: 325,
    marginTop: 25,
    justifyContent: 'space-around',
    position: 'absolute',
  },
  row: {
    width: 325,
    marginTop: 25 / 4,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
export default GamePlayScreen;

import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import GameDashoard from '../components/GameDashoard';
import Background from '../components/Background';

const GamePlayScreen = ({ navigation }) => {

  return (
    <Background>
      <GameDashoard navigation={navigation} />
    </Background>
  );
};

const styles = StyleSheet.create({});
export default GamePlayScreen;

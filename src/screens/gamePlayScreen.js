import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import BoardStack from '../components/BoardStack';
import Background from '../components/Background';

const GamePlayScreen = ({ navigation }) => {

  return (
    <Background>
      <BoardStack />
    </Background>
  );
};

const styles = StyleSheet.create({});
export default GamePlayScreen;

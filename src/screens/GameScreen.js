import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const GameScreen = ({ navigation }) => {
  
  return (
    <View style={styles.container}>
      <Text>GameScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});

export default GameScreen;

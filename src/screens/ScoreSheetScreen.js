import React from 'react';
import { StyleSheet, View,Text } from 'react-native';

const ScoreSheetScreen = ({ navigation }) => {
  
  return (
    <View style={styles.container}>
      <Text>ScoreSheetScreen</Text>
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

export default ScoreSheetScreen;

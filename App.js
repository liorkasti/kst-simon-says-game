import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import GamePlayScreen from './src/screens/gamePlayScreen';
import ScoreSheetScreen from './src/screens/scoreSheetScreen';

const App = () => {

  const Tab = createMaterialBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Game"
          component={GamePlayScreen}
          options={{
            tabBarLabel: "Game",
            tabBarColor: '#1f65ff',
            tabBarIcon: () => {
              return (
                <Icon
                  name="gamepad-circle"
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="ScoreSheet"
          component={ScoreSheetScreen}
          options={{
            tabBarLabel: 'ScoreBoard',
            tabBarColor: '#694fad',
            tabBarIcon: () => {
              return (
                <Icon
                  name="scoreboard"
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App
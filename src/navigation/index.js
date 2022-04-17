import React, {useEffect} from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Orientation from 'react-native-orientation-locker';

import GamePlayScreen from '../screens/gamePlayScreen';
import ScoreSheetScreen from '../screens/scoreSheetScreen';

const App = () => {
  useEffect(() => {
    setTimeout(() => { Orientation.lockToPortrait(); });
  });

  const Tab = createMaterialBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Game"
          component={GamePlayScreen}
          options={{
            tabBarLabel: "Game",
            tabBarColor: '#f8f9f9',
            tabBarIcon: ({ color }) => (
              <Icon name="gamepad-circle" color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="ScoreSheet"
          component={ScoreSheetScreen}
          options={{
            tabBarLabel: 'ScoreSheet',
            tabBarColor: '#694fad',
            tabBarIcon: ({ color }) => (
              <Icon name="podium" color={color} size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App
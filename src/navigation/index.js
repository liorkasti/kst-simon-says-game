import React, { useEffect } from 'react';
import { useColorScheme, StatusBar, Orientation } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Colors as Theme } from 'react-native/Libraries/NewAppScreen';
import { Provider as PaperProvider, DefaultTheme as PaperDefaultTheme, DarkTheme as PaperDarkTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { DrawerContent } from './DrawerContent';
import GamePlayScreen from '../screens/gamePlayScreen';
import ScoreSheetScreen from '../screens/scoreSheetScreen';
import SplashScreen from '../screens/splashScreen';

const App = () => {

  useEffect(() => {
    console.disableYellowBox = true;
    // setTimeout(() => { Orientation.lockToPortrait(); });
  }, []);

  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  const Tab = createMaterialBottomTabNavigator();
  const isDarkMode = useColorScheme() === 'dark';

  const theme = isDarkMode ? Theme.darker : Theme.lighter;

  const TabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          activeColor: "#fff",
        }}>
        <Tab.Screen
          name="Dashboard"
          component={GamePlayScreen}
          options={{
            tabBarLabel: "Dashboard",
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
    )
  }

  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            width: '100%',
            backgroundColor: '#f8f9f9'
          }
        }}
        drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Dashboard" component={TabNavigator} />
        <Drawer.Screen name="ScoreSheet" component={ScoreSheetScreen} />
      </Drawer.Navigator>
    )
  }

  return (
    // <PaperProvider theme={theme}>
    <>
      <StatusBar backgroundColor='#009387' barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Dashboard" component={DrawerNavigator} />
          <Stack.Screen name="ScoreSheet" component={ScoreSheetScreen} />
        </Stack.Navigator>
      </NavigationContainer >
    </>
    // </PaperProvider>
  );
};


export default App;
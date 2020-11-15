import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '_screens/home';
import SettingsScreen from '_screens/settings';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'My home'}}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './stacks/HomeStack';

const Navigator = () => {
  return (
    <NavigationContainer headerMode="none">
      <HomeStack />
    </NavigationContainer>
  );
};

export default Navigator;

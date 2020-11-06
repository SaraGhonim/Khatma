import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/home'
import SplashScreen from './src/screens/splash'
import BasmalaScreen from './src/screens/basmala'
import SettingsScreen from './src/screens/settings'
import SliderScreen from './src/components/slider'
import OfflineNotice from './src/components/OfflineNotice'

const Stack = createStackNavigator();

const App = () => {
  

  return (
    
    <NavigationContainer>
              <OfflineNotice />

      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Slider" component={SliderScreen} />

        <Stack.Screen name="Basmala" component={BasmalaScreen} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'My home' }} />
        <Stack.Screen name="Settings" component={SettingsScreen} />

      </Stack.Navigator>
    </NavigationContainer>
    
     
  );
};

export default App;

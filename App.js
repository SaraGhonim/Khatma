import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/home'
import SplashScreen from './src/screens/splash'
import BasmalaScreen from './src/screens/basmala'
import SettingsScreen from './src/screens/settings'
import SliderScreen from './src/components/slider'
import OfflineNotice from './src/components/OfflineNotice'
import SurahsContextProvider from "./src/contexts/todoList";

const Stack = createStackNavigator();

const App = () => {
  

  return (
    <SurahsContextProvider>

    
    <NavigationContainer headerMode="none">
              <OfflineNotice />

      <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Slider" component={SliderScreen} />

        <Stack.Screen name="Basmala" component={BasmalaScreen} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'My home' }} />
        <Stack.Screen name="Settings" component={SettingsScreen} />

      </Stack.Navigator>
    </NavigationContainer>
    </SurahsContextProvider>
    
     
  );
};

export default App;

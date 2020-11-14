import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '_screens/home'
import SplashScreen from '_screens/splash'
import BasmalaScreen from '_screens/basmala'
import SettingsScreen from '_screens/settings'
import SliderScreen from '_components/slider'
import OfflineNotice from '_components/OfflineNotice'
import SurahsContextProvider from "_contexts/list";

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

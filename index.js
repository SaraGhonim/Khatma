/**
 * @format
 */
import 'react-native-gesture-handler';
import App from './App';
import {NetworkProvider} from 'react-native-offline';
import * as React from 'react';
import {AppRegistry} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {name as appName} from './app.json';

export default function Main() {
  return (
    <NetworkProvider>
      <PaperProvider>
        <App />
      </PaperProvider>
    </NetworkProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);

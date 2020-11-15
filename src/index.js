import * as React from 'react';
import {NetworkProvider} from 'react-native-offline';
import {ThemeProvider} from 'react-native-magnus';
import DefaultTheme from '_globals/theme';
import Navigator from '_screens/mounter';
export default function App() {
  return (
    <NetworkProvider>
      <ThemeProvider theme={DefaultTheme}>
        <Navigator />
      </ThemeProvider>
    </NetworkProvider>
  );
}

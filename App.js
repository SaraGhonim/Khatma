import * as React from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';

const App = () => {


  return (
    <View style={{backgroundColor: 'pink', flex: 1}}>
      <FastImage
        style={{width: 200, height: 200}}
        source={{
            uri: 'https://unsplash.it/400/400?image=1',
        }}    
            resizeMode={FastImage.resizeMode.contain}
      />

    </View>
  );
};

export default App;

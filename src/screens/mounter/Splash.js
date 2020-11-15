import React from 'react';
import {Div} from 'react-native-magnus';
import Image from 'react-native-fast-image';
import pattern from '_assets/images/pattern.png';
import {useWindowDimensions} from 'react-native';
const Splash = () => {
  const {width} = useWindowDimensions();
  return (
    <Div bg="primary" flex={1} justifyContent="center" alignItems="center">
      <Image
        style={{width: width * 0.5, height: width * 0.5}}
        source={pattern}
        resizeMode={Image.resizeMode.contain}
      />
    </Div>
  );
};

export default Splash;

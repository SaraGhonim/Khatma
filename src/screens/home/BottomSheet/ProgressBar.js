import React from 'react';
import {View} from 'react-native';
import {useTrackPlayerProgress} from 'react-native-track-player';
const ProgressBar = () => {
  const {position, bufferedPosition, duration} = useTrackPlayerProgress();
  return (
    <View
      style={{height: 5, width: '90%', marginTop: 10, flexDirection: 'row',backgroundColor: 'green',}}>
      <View style={{flex: position, backgroundColor: 'red'}} />
      <View
        style={{
          flex: duration - position,
          backgroundColor: 'grey',
        }}
      />
    </View>
  );
};

export default ProgressBar;

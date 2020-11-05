import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import OfflineNotice from './src/components/OfflineNotice';

const App = () => {
  const trackPlayerInit = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add({
      id: '1',
      url:
        'http://docs.google.com/uc?export=open&id=18_kcR9izZi1ty-Cj5Yj-43h5GWnl627m',
      type: 'default',
      title: 'Surat Maryam',
      album: 'My Album',
      artist: 'a7med ell7dan',
      artwork: 'https://picsum.photos/100',
    });
    return true;
  };
  const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false);

  //initialize the TrackPlayer when the App component is mounted
  useEffect(() => {
    const startPlayer = async () => {
      let isInit = await trackPlayerInit();
      setIsTrackPlayerInit(isInit);
    };
    startPlayer();
  }, []);

  const play = () => {
    TrackPlayer.play();
  };
  const pause = () => {
    TrackPlayer.pause();
  };

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'red',
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
          }}>
          <OfflineNotice />
          <TouchableOpacity
            style={{
              backgroundColor: 'dodgerblue',
              marginHorizontal: 60,
              padding: 10,
              borderRadius: 10,
              margin: 20,
            }}
            onPress={play}>
            <Text style={{textAlign: 'center', color: 'white'}}>Play</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'dodgerblue',
              marginHorizontal: 60,
              padding: 10,
              borderRadius: 10,
            }}
            onPress={pause}>
            <Text style={{textAlign: 'center', color: 'white'}}>Pause</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;

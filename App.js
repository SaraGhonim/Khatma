import React, {useState, useEffect} from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import TrackPlayer from 'react-native-track-player';

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
            backgroundColor: 'papayawhip',
          }}>
          <Text>Music Player</Text>
          <Button title="Play" onPress={play} disabled={!isTrackPlayerInit} />
          <Text>Music Player</Text>

          <Button
            style={{margin: 10, padding: 10}}
            title="Pause"
            onPress={pause}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import List from './list';

import {usePlayer} from '_globals/state/player';
import {Div} from 'react-native-magnus';

import {useWindowDimensions} from 'react-native';
import Player from './BottomSheet';
import TrackPlayer, {useTrackPlayerEvents} from 'react-native-track-player';
const Home = ({navigation}) => {
  // current played track
  //
  const [state, {setSelectedTrack}] = usePlayer();
  const {width} = useWindowDimensions();

  const playerRef = React.useRef(null);
  useTrackPlayerEvents(['playback-track-changed'], async (event) => {
    if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_TRACK_CHANGED) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      const selectedTrack = track || {};
      setSelectedTrack(selectedTrack);
    }
  });
  return (
    <SafeAreaView style={styles.container}>
      <Div flex={1} bg="primary">
        <List playerRef={playerRef} />
        <Player ref={playerRef} />
      </Div>
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  // Screen
  container: {
    flex: 1,
  },
});

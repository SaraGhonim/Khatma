import {getLaunched, setLaunched} from '_services/launched';
import TrackPlayer from 'react-native-track-player';
import {Surahs} from '_constants/mocks';
export default {
  initialize: () => async ({setState, getState}) => {
    try {
      await TrackPlayer.add(Surahs);
      let trackId = await TrackPlayer.getCurrentTrack();
      let selectedTrack = await TrackPlayer.getTrack(trackId);
      setState({isInitializing: false, selectedTrack});
    } catch (err) {
      console.log('err', err);
    }
  },
  togglePlayback: () => async ({setState, getState}) => {
    try {
      const currentTrack = await TrackPlayer.getCurrentTrack();
      const currentState = await TrackPlayer.getState();
      if (currentTrack == null) {
        await TrackPlayer.reset();
        await TrackPlayer.add(Surahs);
        let trackId = await TrackPlayer.getCurrentTrack();
        let selectedTrack = await TrackPlayer.getTrack(trackId);
        setState({selectedTrack});
        await TrackPlayer.play();
      } else {
        if (currentState === TrackPlayer.STATE_PAUSED) {
          await TrackPlayer.play();
        } else {
          await TrackPlayer.pause();
        }
      }
    } catch (err) {
      console.log('err', err);
    }
  },
  skipToNext: () => async ({setState, getState}) => {
    try {
      await TrackPlayer.skipToNext();
    } catch (err) {
      console.log('err', err);
    }
  },
  skipToPrevious: () => async ({setState, getState}) => {
    try {
      await TrackPlayer.skipToPrevious();
    } catch (err) {
      console.log('err', err);
    }
  },
  skipToTrack: (id) => async ({setState, getState}) => {
    try {
      await TrackPlayer.skip(id);
    } catch (err) {
      console.log('err', err);
    }
  },
  setPlayerState: (playerState) => async ({setState, getState}) => {
    try {
      setState({playerState: playerState});
    } catch (err) {
      console.log('err', err);
    }
  },
  setSelectedTrack: (selectedTrack) => async ({setState, getState}) => {
    try {
      setState({selectedTrack});
    } catch (err) {
      console.log('err', err);
    }
  },
};

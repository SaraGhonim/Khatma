import React, {useEffect, useState} from 'react';
import Splash from './Splash';
import Navigator from '_navigations';
import {useApp} from '_globals/state/app';
import {usePlayer} from '_globals/state/player';
import LandingPage from '../landingPage';
import InfoSlider from '../infoSlider';
import TrackPlayer from 'react-native-track-player';

const Mounter = () => {
  const [localLoading, setLocalLoading] = useState(true);
  const [{language, launched}, {retrieveLanguage, retrieveLaunched}] = useApp();
  const [{isInitializing}, {initialize}] = usePlayer();
  const Loading = localLoading || isInitializing;

  const _bootstrap = async () => {
    await retrieveLanguage();
    await retrieveLaunched();
    await initialize();
    TrackPlayer.setupPlayer().then(() => {
      setLocalLoading(false);
    });
  };
  useEffect(() => {
    _bootstrap();
  }, []);

  if (Loading) {
    return <Splash />;
  }
  if (!language) {
    return <LandingPage />;
  }
  if (!launched) {
    return <InfoSlider />;
  }
  return <Navigator />;
};

export default Mounter;

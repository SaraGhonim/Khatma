import React, {useEffect, useState} from 'react';
import Splash from './Splash';
import Navigator from '_navigations';
import {useApp} from '_globals/state/app';
import LandingPage from '../landingPage';
import InfoSlider from '../infoSlider';
const Mounter = () => {
  const [localLoading, setLocalLoading] = useState(true);
  const [{language, launched}, {retrieveLanguage, retrieveLaunched}] = useApp();
  const Loading = localLoading;

  const _bootstrap = async () => {
    await retrieveLanguage();
    await retrieveLaunched();
    setLocalLoading(false);
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

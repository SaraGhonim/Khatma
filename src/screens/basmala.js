import React, {useEffect} from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';
import Slider from '../components/slider';
import {Button} from 'react-native-paper';
import theme from '../constants/theme';
import FastImage from 'react-native-fast-image';
import {setLanguage, t} from '../translations/i18n';
import TrackPlayer from 'react-native-track-player';
import RNRestart from 'react-native-restart';
import * as Animatable from 'react-native-animatable';

const Basmala = ({navigation}) => {
  const start = async () => {
    // Set up the player
    await TrackPlayer.setupPlayer();

    // Add a track to the queue
    await TrackPlayer.add({
      id: 'trackId',
      url: require('./track.mp3'),
    });

    // Start playing it
    await TrackPlayer.play();
  };
  useEffect(() => {
    start();
    setTimeout(() => navigation.navigate('Slider'), 5700);
  }, []);

  const [showButtons, setShowButtons] = React.useState(false);
  return (
    <View style={{backgroundColor: theme.light.colors.primary, flex: 1}}>
      <View style={{flexDirection: 'row-reverse'}}>
        <FastImage
          style={{width: 200, height: 200, borderBottomRedius: 10}}
          source={require('_assets/4.png')}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      <LottieView
        source={require('_assets/bismillah.json')}
        autoPlay
        loop={false}
        onAnimationFinish={() => setShowButtons(true)}
      />

      {/* <Button
        mode="contained"
        onPress={() =>navigation.navigate('Slider')}
        style={{marginTop: 250,backgroundColor:theme.light.colors.secondary, marginHorizontal:80 , borderRadius:10}}>
        {t('next')}
      </Button> */}
      {showButtons && (
        <View>
          <Animatable.View  animation='slideInLeft'>
            <Button
              mode="contained"
              onPress={() => {
                setLanguage({languageTag: 'ar', isRTL: true});
                RNRestart.Restart();
              }}
              style={{
                marginTop: 250,
                backgroundColor: theme.light.colors.secondary,
                marginHorizontal: 80,
                borderRadius: 10,
              }}>
              {t('lang1')}
            </Button>
          </Animatable.View>
          <Animatable.View  animation='slideInRight'>
            <Button
              mode="contained"
              onPress={() => {
                setLanguage({languageTag: 'en', isRTL: false},()=>{
                  RNRestart.Restart();
                });
              
              }}
              style={{
                marginTop: 10,
                backgroundColor: theme.light.colors.secondary,
                marginHorizontal: 80,
                borderRadius: 10,
              }}>
              {t('lang2')}
            </Button>
          </Animatable.View>
        </View>
      )}
    </View>
  );
};

export default Basmala;

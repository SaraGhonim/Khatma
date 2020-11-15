import React, {useState, useEffect} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Div} from 'react-native-magnus';
import Image from 'react-native-fast-image';
import pattern from '_assets/images/pattern.png';
import LottieView from 'lottie-react-native';
import LanguageButtons from './languageButtons';
const {width, height} = Dimensions.get('window');
import TrackPlayer from 'react-native-track-player';
const LandingePage = () => {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    playTrack();
  }, []);
  const onAnimationFinish = () => {
    setShowButtons(true);
  };
  const playTrack = async () => {
    // Set up the player
    try {
      await TrackPlayer.setupPlayer();
      // Add a track to the queue
      await TrackPlayer.add({
        id: 'basmala',
        url: require('_assets/sounds/basmala.mp3'),
        title: 'basmala',
        artist: 'Mohamed Ellahdan',
      });
      // Start playing it
      await TrackPlayer.play();
    } catch (err) {
      console.log('err', err);
    }
  };
  return (
    <Div flex={1} bg="primary">
      <Div h={height * 0.3}>
        <Div
          position="absolute"
          right={-1 * width * 0.15}
          top={-1 * width * 0.15}>
          <Image
            style={{width: width * 0.6, height: width * 0.6}}
            source={pattern}
            resizeMode={Image.resizeMode.contain}
          />
        </Div>
      </Div>
      <LottieView
        source={require('_assets/animations/bismillah.json')}
        autoPlay
        loop={false}
        autoSize
        style={styles.animation}
        onAnimationFinish={onAnimationFinish}
      />
      {showButtons ? <LanguageButtons /> : null}
    </Div>
  );
};

export default LandingePage;
const styles = StyleSheet.create({
  animation: {
    width: width * 0.7,
    height: height * 0.3,
  },
});

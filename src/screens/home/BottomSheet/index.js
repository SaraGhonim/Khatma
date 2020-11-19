import React, {forwardRef} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
// import { BlurView } from 'expo-blur'
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {BlurView} from '@react-native-community/blur';
import {usePlayer} from '_globals/state/player';
import {t} from 'i18n-js';
import {usePlaybackState} from 'react-native-track-player';
import {ActivityIndicator} from 'react-native-paper';
import ProgressBar from './ProgressBar';
import {Button, Div, Icon} from 'react-native-magnus';
const AnimatedView = Animated.View;
const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

const songCoverSizes = [50, Dimensions.get('window').width - 100];
const songCoverTopPositions = [
  10,
  Dimensions.get('window').width / 2 - songCoverSizes[1] / 2,
];
const songCoverLeftPositions = [
  20,
  Dimensions.get('window').width / 4 - songCoverSizes[1] / 32,
];
const snapPoints = [
  70,
  songCoverSizes[1] + songCoverTopPositions[1] + 15 + 24 + 10 + 30 + 28,
];

const song = {
  id: '0',
  name: `Ain't A Thing`,
  album: 'TIM',
  artist: 'Avicii',
  length: '3:04',
};

const Player = forwardRef((props, ref) => {
  let fall = new Animated.Value(1);
  const playerState = usePlaybackState();
  console.log('playerState', playerState);
  const [
    {selectedTrack},
    {togglePlayback, skipToPrevious, skipToNext},
  ] = usePlayer();

  console.log('selectedTrack', selectedTrack);
  const screenName = 'Home.';
  const animatedSongCoverTopPosition = Animated.interpolate(fall, {
    inputRange: [0, 1],
    outputRange: songCoverTopPositions.slice().reverse(),
    extrapolate: Animated.Extrapolate.CLAMP,
  });

  const animatedSongCoverSize = Animated.interpolate(fall, {
    inputRange: [0, 1],
    outputRange: [songCoverSizes[0], songCoverSizes[1]].slice().reverse(),
    extrapolate: Animated.Extrapolate.CLAMP,
  });

  const animatedHeaderContentOpacity = Animated.interpolate(fall, {
    inputRange: [0.75, 1],
    outputRange: [0, 1],
    extrapolate: Animated.Extrapolate.CLAMP,
  });

  const onFlatListTouchStart = () => {
    ref.current.snapTo(0);
  };

  const onHeaderPress = () => {
    // togglePlayback();
    ref.current.snapTo(1);
  };

  const renderContent = () => {
    const animatedBackgroundOpacity = Animated.sub(
      1,
      animatedHeaderContentOpacity,
    );
    const animatedContentOpacity = Animated.interpolate(fall, {
      inputRange: [0, 1],
      outputRange: [1, 0],
      extrapolate: Animated.Extrapolate.CLAMP,
    });

    return (
      <AnimatedView style={[styles.contentContainer]}>
        <AnimatedView
          style={[
            styles.contentBackground,
            {opacity: animatedBackgroundOpacity},
          ]}
        />

        <AnimatedView style={{opacity: animatedContentOpacity}}>
          <AnimatedView
            style={{
              height: Animated.add(
                Animated.sub(animatedSongCoverSize, snapPoints[0]),
                animatedSongCoverTopPosition,
              ),
            }}
          />

          <ProgressBar />
          <Div row justifyContent="center" alignItems="center" mt="xl">
            <Button
              onPress={skipToNext}
              bg="white"
              borderless
              shadow="sm"
              h={40}
              w={40}
              rounded="circle"
              alignSelf="center">
              <Icon name="skip-forward" color="red500" fontFamily="Feather" />
            </Button>
            <Button
              onPress={togglePlayback}
              bg="red500"
              h={60}
              w={60}
              mx="xl"
              rounded="circle"
              shadow="md"
              borderless>
              <Icon name={iconName} color="white" fontFamily="Feather" />
            </Button>
            <Button
              onPress={skipToPrevious}
              bg="white"
              borderless
              shadow="sm"
              h={40}
              w={40}
              rounded="circle"
              alignSelf="center">
              <Icon name="skip-back" color="red500" fontFamily="Feather" />
            </Button>
          </Div>
          <Text style={styles.songTitleLarge}>
            {selectedTrack ? t(screenName + selectedTrack?.title) : 'No Track'}
          </Text>
          <Text
            style={
              styles.songInfoText
            }>{`${selectedTrack.artist} ⏤ ${selectedTrack?.album}`}</Text>
        </AnimatedView>
      </AnimatedView>
    );
  };

  const renderSongCover = () => {
    const animatedSongCoverLeftPosition = Animated.interpolate(fall, {
      inputRange: [0, 1],
      outputRange: songCoverLeftPositions.slice().reverse(),
      extrapolate: Animated.Extrapolate.CLAMP,
    });

    return (
      <AnimatedView
        key={'song-cover-container'}
        style={[
          styles.songCoverContainer,
          {
            height: animatedSongCoverSize,
            width: animatedSongCoverSize,
            left: animatedSongCoverLeftPosition,
            top: animatedSongCoverTopPosition,
          },
        ]}>
        <Image
          key={'song-cover'}
          style={styles.songCoverImage}
          source={require('_assets/images/pattern.png')}
        />
      </AnimatedView>
    );
  };
  const iconName =
    playerState === 'playing'
      ? 'pause'
      : playerState === 'paused' || playerState === 'stopped'
      ? 'play'
      : 'play';
  const renderHeader = () => {
    const animatedBackgroundOpacity = Animated.sub(
      1,
      animatedHeaderContentOpacity,
    );
    return [
      <TouchableWithoutFeedback
        key={'header-container'}
        onPress={onHeaderPress}>
        <AnimatedView style={styles.headerContainer}>
          <AnimatedView
            style={[
              styles.headerBackground,
              {
                opacity: animatedBackgroundOpacity,
              },
            ]}>
            {renderHandler()}
          </AnimatedView>
          <AnimatedBlurView
            blurAmount={50}
            style={[
              styles.headerContentContainer,
              {
                opacity: animatedHeaderContentOpacity,
              },
            ]}>
            <View style={styles.headerTopBorder} />
            {/* <Text style={styles.songTitleSmall}>Surat Al-Fatiha</Text> */}
            <TouchableOpacity style={styles.headerActionButton}>
              <Text style={styles.songTitleSmall}>
                {selectedTrack
                  ? t(screenName + selectedTrack?.title)
                  : 'No Track'}
              </Text>
              {playerState === 'STATE_BUFFERING' ? (
                <ActivityIndicator />
              ) : (
                <Ionicons name={iconName} size={32} color="white" />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.headerActionButton}></TouchableOpacity>
          </AnimatedBlurView>
        </AnimatedView>
      </TouchableWithoutFeedback>,
      renderSongCover(),
    ];
  };

  const renderShadow = () => {
    const animatedShadowOpacity = Animated.interpolate(fall, {
      inputRange: [0, 1],
      outputRange: [0.5, 0],
    });

    return (
      <AnimatedView
        pointerEvents="none"
        style={[
          styles.shadowContainer,
          {
            opacity: animatedShadowOpacity,
          },
        ]}
      />
    );
  };

  const renderHandler = () => {
    const animatedBar1Rotation = (outputRange: number[]) =>
      Animated.interpolate(fall, {
        inputRange: [0, 1],
        outputRange: outputRange,
        extrapolate: Animated.Extrapolate.CLAMP,
      });

    return (
      <View style={styles.handlerContainer}>
        <AnimatedView
          style={[
            styles.handlerBar,
            {
              left: -7.5,
              transform: [
                {
                  rotate: Animated.concat(
                    // @ts-ignore
                    animatedBar1Rotation([0.3, 0]),
                    'rad',
                  ),
                },
              ],
            },
          ]}
        />
        <AnimatedView
          style={[
            styles.handlerBar,
            {
              right: -7.5,
              transform: [
                {
                  rotate: Animated.concat(
                    // @ts-ignore
                    animatedBar1Rotation([-0.3, 0]),
                    'rad',
                  ),
                },
              ],
            },
          ]}
        />
      </View>
    );
  };

  return (
    <>
      <BottomSheet
        ref={ref}
        initialSnap={0}
        callbackNode={fall}
        snapPoints={snapPoints}
        renderHeader={renderHeader}
        renderContent={renderContent}
      />
      {renderShadow()}
    </>
  );
});

const styles = StyleSheet.create({
  // Screen
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  // Shadow
  shadowContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
  },

  // Content
  contentContainer: {
    alignItems: 'center',
    height: snapPoints[1] - snapPoints[0],
    overflow: 'visible',
  },

  contentBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#fff',
  },

  // Header
  headerContainer: {
    height: snapPoints[0],
  },

  headerBackground: {
    ...StyleSheet.absoluteFillObject,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },

  headerContentContainer: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingRight: 20,
    paddingLeft: 20 + songCoverSizes[0] + 20,
  },

  headerTopBorder: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    opacity: 0.5,
    height: 0.25,
    backgroundColor: '#9B9B9B',
  },

  headerActionButton: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 70,
    minWidth: 50,
    flexDirection: 'row',
  },

  // Handler
  handlerContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: 10,
    height: 20,
    width: 20,
  },

  handlerBar: {
    position: 'absolute',
    backgroundColor: '#D1D1D6',
    top: 5,
    borderRadius: 3,
    height: 5,
    width: 20,
  },

  // Song
  songCoverContainer: {
    position: 'absolute',
    top: 100,
    left: 50,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.25,
    shadowRadius: 15.0,
  },

  songTitleLarge: {
    marginTop: 10,
    textAlign: 'center',
    color: '#cc0e10',
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 30,
  },

  songTitleSmall: {
    flexGrow: 1,
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 16,
    marginLeft: 16,
  },

  songInfoText: {
    textAlign: 'center',
    color: '#FE2D55',
    fontSize: 24,
    lineHeight: 28,
  },

  songCoverImage: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
    // backgroundColor: '#333',
  },

  // Seek Bar
  seekBarContainer: {
    height: 24,
    marginTop: 15,
    width: songCoverSizes[1],
  },

  seekBarThumb: {
    position: 'absolute',
    backgroundColor: '#8E8E93',
    top: -2,
    borderRadius: 6,
    width: 6,
    height: 6,
  },

  seekBarTrack: {
    backgroundColor: '#DDDEDD',
    height: 2,
    borderRadius: 4,
  },

  seekBarTimingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  seekBarTimingText: {
    marginTop: 5,
    fontSize: 13,
    lineHeight: 13,
    fontWeight: '500',
    color: '#8E8E93',
  },

  // Song List Item
  songListItemContainer: {
    flexDirection: 'row',
  },

  songListItemCover: {
    marginLeft: 20,
    marginRight: 15,
    marginVertical: 5,
    width: songCoverSizes[0],
    height: songCoverSizes[0],
    borderRadius: 4,
  },

  songListItemInfoContainer: {
    flexGrow: 1,
    borderBottomColor: '#CAC9CE',
    borderBottomWidth: 0.5,
    justifyContent: 'center',
  },

  songListItemSecondaryText: {
    fontSize: 12,
    color: '#8E8D92',
  },
});

export default Player;

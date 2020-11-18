import React, {useState, useEffect} from 'react';
import {View, SafeAreaView,StyleSheet,TouchableWithoutFeedback,TouchableOpacity} from 'react-native';
import List from '_components/list';
import theme from '_constants/theme';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {usePlay} from '_globals/state/sound';
import {Div, Button, Icon, Text} from 'react-native-magnus';
import {ProgressBar, Colors} from 'react-native-paper';
import Image from 'react-native-fast-image';
import pattern from '_assets/images/pattern.png';
import {useWindowDimensions} from 'react-native';
// import { BlurView } from 'expo-blur'
import AppleMusic from './BottomSheet'


const Home = ({navigation}) => {
  const [state, actions] = usePlay();
  const {width} = useWindowDimensions();
  const renderContent = () => (
    <Div h="100%" bg="white">

      <Div row  alignItems="center">
      <Image
        style={{width: width * 0.5, height: width * 0.5}}
        source={pattern}
        resizeMode={Image.resizeMode.contain}
      />
        <Div
          flex={1}
          rounded="md"
          row
          flexWrap="wrap"
          // alignSelf="flex-start"
          alignItems="center"
          ml="xl"
          mt="xl">
          <Text fontSize="xl" color="secondary">
            Surat Al-Fatiha
          </Text>
        </Div>
        <Div row justifyContent="flex-end" alignItems="center" mr="xl" mt="xl">
          {/* <Button
            bg="red500"
            h={40}
            w={40}
            mx="xl"
            rounded="circle"
            shadow="md"
            borderless>
            <Icon name="pause" color="white" fontFamily="Feather" />
          </Button>
          <Button
            bg="white"
            borderless
            shadow="sm"
            h={40}
            w={40}
            rounded="circle"
            alignSelf="center">
            <Icon name="skip-forward" color="red500" fontFamily="Feather" />
          </Button> */}
        </Div>
      </Div>
      <Div mx="xl" mt="xl">
        <MyComponent />
      </Div>
      <Div row>
        <Div flex={1}>
          <Text color="red500" ml="xl" mt="sm">
            00:25
          </Text>
        </Div>
        <Div row justifyContent="flex-end" mr="xl" mt="sm">
          <Text color="red500">01:08</Text>
        </Div>
      </Div>
      <Div row justifyContent="center" alignItems="center" mt="3xl">
      <Button
            bg="white"
            borderless
            shadow="sm"
            h={40}
            w={40}
            rounded="circle"
            alignSelf="center">
            <Icon name="skip-back" color="red500" fontFamily="Feather" />
          </Button>
      <Button
            bg="red500"
            h={40}
            w={40}
            mx="xl"
            rounded="circle"
            shadow="md"
            borderless>
            <Icon name="pause" color="white" fontFamily="Feather" />
          </Button>
          <Button
            bg="white"
            borderless
            shadow="sm"
            h={40}
            w={40}
            rounded="circle"
            alignSelf="center">
            <Icon name="skip-forward" color="red500" fontFamily="Feather" />
          </Button>

      </Div>
      <Div mx="xl" mt="xl">
        <MyComponent/>
        <Div row>
        <Div row flex={1} mt="sm" justifyContent="flex-start">
          <Icon name="volume-1"  fontFamily="Feather" color="red500"/>
        </Div>
        <Div row justifyContent="flex-end"  mt="sm">
          <Icon name="volume-2"  fontFamily="Feather" color="red500"/>
        </Div>
      </Div>
      </Div>

      <Div row justifyContent="center" alignItems="center" mt="3xl">
      
            <Icon name="menu" color="red500" fontFamily="Feather" />
        
     
            <Icon name="download" color="red500" fontFamily="Feather" mx="2xl"/>
       
         
            <Icon name="plus" color="red500" fontFamily="Feather" />
      </Div>


    </Div>
  );
  
//  const AnimatedBlurView = Animated.createAnimatedComponent(BlurView)

  const MyComponent = () => (
    <ProgressBar progress={0.4} color={Colors.red800} />
  );
  const sheetRef = React.useRef(null);

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'red',
        }}>
        <Div flex={1} bg="primary">
          {/* {state.play && <Text>test</Text>} */}
          {/* <Button onPress={() => sheetRef.current.snapTo(2)}>
            Open Bottom Sheet
          </Button>
          <Button onPress={actions.toggle}>toggle</Button> */}
          {/* <List playerRef={sheetRef} />

          <BottomSheet
            ref={sheetRef}
            snapPoints={[0, 100, 300, 550]}
            borderRadius={25}
            renderContent={renderContent}
          /> */}
          <AppleMusic/>
        </Div>
      </SafeAreaView>
    </>
  );
};

export default Home;
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
    height: 200 - 70,
    overflow: 'visible',
  },

  contentBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#f4d6b2',
  },

  // Header
  headerContainer: {
    height:70,
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
    paddingLeft: 20 + 40 + 20,
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
    minHeight: 50,
    minWidth: 50,
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
    top: 10,
    left: 20,

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
    color: '#333',
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 30,
  },

  songTitleSmall: {
    flexGrow: 1,
    color: '#333',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 16,
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
    backgroundColor: '#333',
  },

  // Seek Bar
  seekBarContainer: {
    height: 24,
    marginTop: 15,
    width:80,
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
    width:40,
    height:40,
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

})
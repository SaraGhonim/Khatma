import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {IconButton, Card, Title} from 'react-native-paper';
import theme from '_constants/theme';
import TrackPlayer from 'react-native-track-player';
import {usePlay} from '../globals/state/sound';
import {t} from '_translations/i18n';
import {Div, Button, Icon, Text} from 'react-native-magnus';

class MyPlayerBar extends TrackPlayer.ProgressComponent {
  render() {
    let x = this.state.position;
    let y = this.state.duration;
    setDuration(y);
    return (
      <View>
        {/* <Text>{this.getProgress()}</Text>
              <Text>{this.getBufferedProgress()}</Text>
              <Text>position { x/60 } :  {x%60}  </Text> */}
        <Text>duration {y / 60} </Text>
      </View>
    );
  }
}
const ItemList = ({name, url, duration, playerRef}) => {
  const [state, actions] = usePlay();

  const trackPlayerInit = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add({
      id: '1',
      url: url,
      type: 'default',
      title: name,
      artist: 'Ibraheem El-Maghraby',
      artwork: 'https://picsum.photos/100',
    });
    return true;
  };
  const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false);
  const [pauseIcon, setPauseIcon] = useState(false);
  // const [duration, setDuration] = useState(0);

  //initialize the TrackPlayer when the Home component is mounted
  useEffect(() => {
    const startPlayer = async () => {
      let isInit = await trackPlayerInit();
      setIsTrackPlayerInit(isInit);
    };
    startPlayer();
    // setDuration(TrackPlayer.duration)
  }, []);

  const play = () => {
    TrackPlayer.play();
    playerRef.current.snapTo(1);
    setPauseIcon(true);
    actions.toggle;
  };
  const pause = () => {
    TrackPlayer.pause();
    setPauseIcon(false);
    // playerRef.current.snapTo(0);
    actions.toggle;
  };
  return (
    <Div bg="white" m="lg" p="lg" shadow="md" rounded="lg">
      <Div row>
        <Div flex={1} rounded="md" row flexWrap="wrap" alignSelf="flex-start">
          <Text fontSize="xl" color="secondary">
            {name}
          </Text>
        </Div>

        <Div row rounded="md">
          <Button bg="none" onPress={pauseIcon ? pause : play}>
            {pauseIcon ? (
              <Icon name="pause" fontFamily="Feather" color="red500" />
            ) : (
              <Icon name="play" fontFamily="Feather" color="red500" />
            )}
          </Button>
          <Button bg="none">
            <Icon name="download" fontFamily="Feather" ml="lg" color="red500" />
          </Button>
        </Div>
      </Div>
    </Div>
  );
};

export default ItemList;

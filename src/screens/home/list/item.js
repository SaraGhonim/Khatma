import React from 'react';
import {Div, Button, Icon, Text} from 'react-native-magnus';
import {t} from '_translations/i18n';
import {usePlayer} from '_globals/state/player';
import {usePlaybackState} from 'react-native-track-player';
const Item = ({item}) => {
  const {title, url, duration} = item;
  const playerState = usePlaybackState();
  const [{selectedTrack}, {skipToTrack, togglePlayback}] = usePlayer();
  const selected = selectedTrack.id === item.id;
  console.log('item', item);
  const screenName = 'Home.';
  const pauseIcon = true;
  const onPlay = async () => {
    await skipToTrack(item.id);
    await togglePlayback();
  };
  const iconName =
    playerState === 'playing'
      ? 'pause'
      : playerState === 'paused' || playerState === 'stopped'
      ? 'play'
      : 'play';
  return (
    <Div
      bg={selected ? 'gray100' : 'white'}
      m="lg"
      p="lg"
      shadow="md"
      rounded="lg">
      <Div row>
        <Div flex={1} rounded="md" row flexWrap="wrap" alignSelf="flex-start">
          <Text fontSize="xl" color="secondary">
            {t(screenName + title)}
          </Text>
        </Div>

        <Div row rounded="md">
          <Button bg="none" onPress={onPlay}>
            <Icon
              name={selected ? iconName : 'play'}
              fontFamily="Feather"
              color="red500"
            />
          </Button>
          <Button bg="none">
            <Icon name="download" fontFamily="Feather" ml="lg" color="red500" />
          </Button>
        </Div>
      </Div>
    </Div>
  );
};

export default Item;

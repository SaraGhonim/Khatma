import React ,{useState,useEffect} from 'react';
import {View} from 'react-native';
import {IconButton, Card, Title, } from 'react-native-paper';
import theme from '_constants/theme';
import TrackPlayer from 'react-native-track-player';
import { useCounter } from '../globals/states/sound';



class MyPlayerBar extends TrackPlayer.ProgressComponent {

  render() {
    let x= this.state.position
    let y= this.state.duration
    setDuration(y)
      return (
          <View>
              {/* <Text>{this.getProgress()}</Text>
              <Text>{this.getBufferedProgress()}</Text>
              <Text>position { x/60 } :  {x%60}  </Text> */}
               <Text>duration { y/60 } </Text>

          </View>
      );
  }
  
}
const ItemList = ({name,url,duration}) => { 
  const [state, actions] = useCounter();

  const trackPlayerInit = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add({
      id: '1',
      url:
        url,
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
    setPauseIcon(true);
actions.toggle
  };
  const pause = () => {
    TrackPlayer.pause();
    setPauseIcon(false);
    actions.toggle

  };
  return (
   
     
      <Card
        elevation={2}
        icon="camera"
        style={{
          backgroundColor: theme.light.colors.primary3,
          height: 65,
          borderRadius: 15,
          margin: 7,
        }}>
        <Card.Title
          title={name}
          subtitle={duration}
          titleStyle={{fontSize: 18, color: theme.light.colors.secondary}}
          subtitleStyle={{color: theme.light.colors.secondary}}
         
          right={(props) => (
            <IconButton
              {...props}
              icon={pauseIcon? "pause": "play" }
              color={theme.light.colors.secondary}
              onPress={pauseIcon? pause :play}
            />
          )}
        />
      </Card>
  );
};

export default ItemList;

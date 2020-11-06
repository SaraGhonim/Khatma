import * as React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';
import Slider from '../components/slider';
import {Button} from 'react-native-paper';

const Basmala = ({navigation}) => {
  const [showSlider, setShowSlider] = React.useState(false);
  return showSlider ? (
    <Slider />
  ) : (
    <View style={{backgroundColor: 'pink', flex: 1}}>
      <LottieView source={require('../../bismillah.json')} autoPlay loop />
      <Button
        mode="contained"
        onPress={() =>navigation.navigate('Slider')}
        style={{margin: 50}}>
        Next
      </Button>
    </View>
  );
};

export default Basmala;

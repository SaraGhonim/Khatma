import * as React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View,Text,Image } from 'react-native';
import AppIntroSlider  from 'react-native-app-intro-slider';
import Home from '_screens/home'
import theme from '_constants/theme'
import {setLanguage, t} from '_translations/i18n';

const slides = [
  {
    key: 'one',
    title: t('slider.first.title'),
    text:   t('slider.first.next'),
    image: require('_assets/3.jpg'),
    backgroundColor: theme.light.colors.primary,
  },
  {
    key: 'two',
    title:  t('slider.second.title'),
    text: 'Other cool stuff',
     image: require('_assets/3.jpg'),
    backgroundColor: theme.light.colors.primary,
  },
  {
    key: 'three',
    title: t('slider.third.title'),
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
     image: require('_assets/3.jpg'),
    backgroundColor: theme.light.colors.primary,
  }
];
type Item = typeof slides[0];

const Slider = ({navigation}) => {
  const [showApp, setShowApp] = React.useState(false);

  const _onDone=()=>{
    // setShowApp(true)
    navigation.navigate('Home')
  }
 const  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
         <Icon
          name="arrow-forward-sharp"
          color="rgba(255, 255, 255, .9)"
          size={24}
        /> 
      </View>
    );
  };
  const _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };
  const _renderItem = ({item}: {item: Item}) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={{width:100,height:100}} />

        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }
  

  return (
    showApp? <Home/> :
     
     <AppIntroSlider
        data={slides}
        renderItem={_renderItem}
        renderNextButton={_renderNextButton}
        renderDoneButton={_renderDoneButton}
        onDone={()=> navigation.navigate('Home')}
      />
  );
};

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: theme.light.colors.secondary,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: theme.light.colors.secondary,
    textAlign: 'center',
  },
   slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.light.colors.primary,
  },
  title: {
    fontSize: 22,
    color: theme.light.colors.secondary,
    textAlign: 'center',
  },
});
export default Slider;

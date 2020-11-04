import * as React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View,Text,Image } from 'react-native';
import AppIntroSlider  from 'react-native-app-intro-slider';

const slides = [
  {
    key: 'one',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('./moto.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: 'Title 2',
    text: 'Other cool stuff',
     image: require('./moto.jpg'),
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
     image: require('./moto.jpg'),
    backgroundColor: '#22bcb5',
  }
];
type Item = typeof slides[0];

const App = () => {
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
     
     <AppIntroSlider
        data={slides}
        renderItem={_renderItem}
        renderNextButton={_renderNextButton}
        renderDoneButton={_renderDoneButton}

      />
  );
};

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'rgba(100, 100, 100, 0.8)',
    textAlign: 'center',
  },
   slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 22,
    color: 'gray',
    textAlign: 'center',
  },
});
export default App;

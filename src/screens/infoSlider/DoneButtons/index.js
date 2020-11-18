import React, {useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {Button, Div} from 'react-native-magnus';
import {useApp} from '_globals/state/app';
import * as Animatable from 'react-native-animatable';
import {t} from '_translations/i18n'
const Buttons = ({nvigation}) => {
  const {height} = useWindowDimensions();
  const [loading, setLoading] = useState(false);
  const [, {setLaunched}] = useApp();

  const handleLanguage = async () => {
    setLoading(true);
    await setLaunched();
    setLoading(false);
    nvigation.navigate('Home')
  };
  return (
    <Div h={height * 0.3} justifyContent="center" w="100%">
      <Animatable.View animation="slideInLeft">
        <Button
          onPress={() => handleLanguage('ar')}
          mx="3xl"
          px="xl"
          py="lg"
          block
          bg="red600"
          color="white"

          loading={loading}
          underlayColor="red500">
         {t('slider.third.button1')} 
        </Button>
      </Animatable.View>
      <Animatable.View animation="slideInRight">
        <Button
          onPress={() => handleLanguage('en')}
          mt="lg"
          mx="3xl"
          px="xl"
          py="lg"
          bg="white"
          block
          loading={loading}
          color="black"
          underlayColor="red500">
           {t('slider.third.button2')}
        </Button>
      </Animatable.View>
    </Div>
  );
};

export default Buttons;

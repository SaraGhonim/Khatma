import React, {useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {Button, Div} from 'react-native-magnus';
import {useApp} from '_globals/state/app';
import * as Animatable from 'react-native-animatable';
const Buttons = () => {
  const {height} = useWindowDimensions();
  const [loading, setLoading] = useState(false);
  const [, {setLanguage}] = useApp();

  const handleLanguage = async (languageTag) => {
    setLoading(true);
    await setLanguage(languageTag);
    setLoading(false);
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
          fontWeight="bold"
          loading={loading}
          underlayColor="red500">
          العربية
        </Button>
      </Animatable.View>
      <Animatable.View animation="slideInRight">
        <Button
          onPress={() => handleLanguage('en')}
          mt="lg"
          mx="3xl"
          px="xl"
          py="lg"
          bg="red600"
          block
          loading={loading}
          color="white"
          fontWeight="bold"
          underlayColor="red500">
          English
        </Button>
      </Animatable.View>
    </Div>
  );
};

export default Buttons;

import React from 'react';
import {Div, Text, Icon} from 'react-native-magnus';
import {IntroSlides} from '_constants/mocks';
import Image from 'react-native-fast-image';
import DoneButtons from './DoneButtons';
import AppIntroSlider from 'react-native-app-intro-slider';
import {t} from '_translations/i18n';

import {useWindowDimensions, StatusBar, I18nManager} from 'react-native';
const Slider = () => {
  const {width} = useWindowDimensions();
  const renderItem = ({item}) => {
    return (
      <Div bg="primary" alignItems="center" flex={1}>
        <Div justifyContent="center" h="50%">
          <Image
            style={{width: width * 0.5, height: width * 0.5}}
            source={item.image}
            resizeMode={Image.resizeMode.contain}
          />
        </Div>
        <Div>
          <Text fontSize="4xl" textAlign="center" color="secondary">
            {t(item.title)}
          </Text>
          <Text fontSize="2xl" textAlign="center" color="gray500" m="sm">
          {t(item.body)}
          </Text>
        </Div>
        {item.key === '3' ? <DoneButtons /> : null}
      </Div>
    );
  };
  const renderNextButton = () => {
    const iconName = I18nManager.isRTL ? 'arrowleft' : 'arrowright';
    return (
      <Div
        rounded="circle"
        bg="secondary"
        w={40}
        h={40}
        justifyContent="center"
        alignItems="center">
        <Icon name={iconName} color="white" fontSize="3xl" />
      </Div>
    );
  };
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        data={IntroSlides}
        renderItem={renderItem}
        renderNextButton={renderNextButton}
        showDoneButton={false}
      />
    </>
  );
};

export default Slider;

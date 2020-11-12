import React, {useEffect} from 'react';
import {View, Text, ImageBackground, SafeAreaView} from 'react-native';
import {Button} from 'react-native-paper';
import theme from '../constants/theme';
import FastImage from 'react-native-fast-image';
import {setI18nConfig, t} from '../translations/i18n';
import splash from './splash.jpg';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
  // const [isArabic, setIsArabic] = useState(false);

  //initialize the TrackPlayer when the Home component is mounted
  useEffect(() => {
    const knowDirection = async () => {
      let lang = setI18nConfig();

      let launched = await AsyncStorage.getItem('launched');
      if (lang == null) {
        setTimeout(() => navigation.navigate('Basmala'), 3000);
      } else if (launched === null && lang !== null) {
        setTimeout(() => navigation.navigate('Slider'), 3000);
      } else if (launched !== null) {
        setTimeout(() => navigation.navigate('Home'), 3000);
      }
    };
    knowDirection();
    

  }, []);
  return (
    <View style={{backgroundColor: theme.light.colors.primary, flex: 1}}>
      <ImageBackground
        source={require('_assets/3.jpg')}
        resizeMode={FastImage.resizeMode.contain}
        borderRadius={24}
        style={{
          width: '100%',
          height: '95%',
        }}
      />
      {/* <Button
        mode="contained"
        onPress={() => navigation.navigate('Basmala')}
        style={{marginTop: 0,backgroundColor:theme.light.colors.secondary , marginHorizontal:70 , borderRadius:10}}>
         {t('next')}
      </Button>   */}
    </View>
  );
};

export default Splash;
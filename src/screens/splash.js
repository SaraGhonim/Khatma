import React, {useEffect,useRef} from 'react';
import {View, Text, ImageBackground, SafeAreaView} from 'react-native';
import {Button} from 'react-native-paper';
import theme from '_constants/theme';
import FastImage from 'react-native-fast-image';
import {setI18nConfig, t} from '_translations/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { useCounter } from '../globals/states/sound';

const Splash = ({navigation}) => {
  // const [isArabic, setIsArabic] = useState(false);
  const [state, actions] = useCounter();
  const renderContent = () => (
    <View
      style={{
        backgroundColor:  theme.light.colors.primary3,
        padding: 16,
        height: 450,
      }}
    >
    {/* <Button icon={{ source: "add-a-photo", direction: 'rtl' }}>
  Press me
</Button>   */}
</View>  
  );
  const sheetRef = useRef(null);

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
  //  knowDirection();
    

  }, []);
  return (
    <View style={{backgroundColor: theme.light.colors.primary, flex: 1}}>
      {/* <ImageBackground
        source={require('_assets/3.jpg')}
        resizeMode={FastImage.resizeMode.contain}
        borderRadius={24}
        style={{
          width: '100%',
          height: '95%',
        }}
      /> */}
          {/* {state.play&& */}
          
            <BottomSheet
        ref={sheetRef}
        snapPoints={[0, 300, 450]}
        borderRadius={10}
        renderContent={renderContent}
      />
      <Button
        mode="contained"
        onPress={() =>           sheetRef.current.snapTo(2)
}
        style={{marginTop: 0,backgroundColor:theme.light.colors.secondary , marginHorizontal:70 , borderRadius:10}}>
         {t('next')}
      </Button>   
    </View>
  );
};

export default Splash;

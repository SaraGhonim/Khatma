import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {Button} from 'react-native-paper';

const Splash = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'pink',flex:1}}>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Basmala')}
        style={{margin: 50}}>
         Next
      </Button>
    </View>
  );
};

export default Splash;

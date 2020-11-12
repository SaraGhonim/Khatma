import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import List from '../components/list';
import theme from '../constants/theme'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


const Home = ({ navigation }) => {
  
 

  return (
    <>
    
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'red',
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: theme.light.colors.secondary,
          }}>

          <List/>
          {/* <TouchableOpacity
            style={{
              backgroundColor:  theme.light.colors.primary,
              marginHorizontal: 60,
              padding: 10,
              borderRadius: 10,
              margin: 20,
            }}
            onPress={play}>
            <Text style={{textAlign: 'center', color: 'white'}}>Play</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: theme.light.colors.primary,
              marginHorizontal: 60,
              padding: 10,
              borderRadius: 10
              ,margin:20
            }}
            onPress={pause}>
            <Text style={{textAlign: 'center', color: 'white'}}>Pause</Text>
          </TouchableOpacity>
          <Button
        mode="contained"
        onPress={() => navigation.navigate('Settings')}
        style={{marginHorizontal: 60 ,backgroundColor:theme.light.colors.primary,borderRadius:10,margin:20}}>
       Settings
      </Button> */}
        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;

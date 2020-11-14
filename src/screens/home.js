import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView,Button} from 'react-native';
import List from '_components/list';
import theme from '_constants/theme'
// import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { useCounter } from '../globals/states/sound';
// import {Button} from 'react-native-paper'

const Home = ({ navigation }) => {
  
 
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
</Button> */}
      <Text>{state.play}</Text>
    </View>
  );
  const sheetRef = React.useRef(null);

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
   <Button
          title="Open Bottom Sheet"
          onPress={()=>
          sheetRef.current.snapTo(2)
          }
         
          
        
        /> 
        <Button
          title="toggle"
          onPress={actions.toggle          }
         
          
        
        /> 
          <List/>
          {/* {state.play&& */}
          
            <BottomSheet
        ref={sheetRef}
        snapPoints={[0, 300, 450]}
        borderRadius={10}
        renderContent={renderContent}
      />
          
          {/* } */}

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

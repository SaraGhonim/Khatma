import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import List from '_components/list';
import theme from '_constants/theme';
// import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {useCounter} from '../globals/state/sound';
import {Div, Button, Icon} from 'react-native-magnus';

const Home = ({navigation}) => {
  const [state, actions] = useCounter();
  const renderContent = () => (
    <Div h="100%" bg="white">
      <Div row justifyContent="center" alignItems="center" mt="xl">
        <Button
          bg="white"
          borderless
          shadow="sm"
          h={40}
          w={40}
          rounded="circle"
          alignSelf="center">
          <Icon name="repeat" color="red500" fontFamily="Feather" />
        </Button>
        <Button
          bg="red500"
          h={60}
          w={60}
          mx="xl"
          rounded="circle"
          shadow="md"
          borderless>
          <Icon name="play" color="white" fontFamily="Feather" />
        </Button>
        <Button
          bg="white"
          borderless
          shadow="sm"
          h={40}
          w={40}
          rounded="circle"
          alignSelf="center">
          <Icon name="skip-forward" color="red500" fontFamily="Feather" />
        </Button>
      </Div>
    </Div>
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
          {state.play && <Text>test</Text>}
          <Button onPress={() => sheetRef.current.snapTo(2)}>
            Open Bottom Sheet
          </Button>
          <Button onPress={actions.toggle}>toggle</Button>
          <List playerRef={sheetRef} />

          <BottomSheet
            ref={sheetRef}
            snapPoints={[0, 300, 450]}
            borderRadius={10}
            renderContent={renderContent}
          />

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

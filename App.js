import React from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';

const App = () => {
  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: '100%',
      }}>
      <Text>Swipe down to close</Text>
    </View>
  );

  const sheetRef = React.useRef(null);
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'papayawhip',
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'papayawhip',
          }}>
          <Button
            title="Open Bottom Sheet"
            onPress={() => sheetRef.current.snapTo(0)}
          />
          <Button
            title="close Bottom Sheet"
            onPress={() => sheetRef.current.snapTo(1)}
          />
        </View>
      </SafeAreaView>
      <BottomSheet
        ref={sheetRef}
        snapPoints={['90%', 100]}
        borderRadius={10}
        renderContent={renderContent}
      />
    </>
  );
};

export default App;

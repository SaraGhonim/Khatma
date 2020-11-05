import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import { NetworkConsumer } from 'react-native-offline';

const OfflineNotice = () => {

    return (

        <NetworkConsumer>
        {({ isConnected }) => (
          isConnected ? (null ) : (
            <View style ={{backgroundColor:'red',height:30,justifyContent:'center'}}> 
            <Text style={{textAlign:'center',color:'white',}}> No Internet Connection </Text>
            </View>
          )
        )}
      </NetworkConsumer>
      
      );
}
 
export default OfflineNotice;
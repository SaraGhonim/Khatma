import * as React from 'react';
import {View} from 'react-native';
import {Searchbar, Button} from 'react-native-paper';
import LottieView from 'lottie-react-native';

const App = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
     <View style={{backgroundColor:'pink',flex:1}}>

     <LottieView source={require('./bismillah.json')} autoPlay loop />
     </View>

  );
};

export default App;

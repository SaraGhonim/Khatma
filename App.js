import * as React from 'react';
import {View} from 'react-native';
import {Searchbar, Button} from 'react-native-paper';

const App = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={{flex: 1, backgroundColor: 'gray'}}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log('Pressed')}
        style={{margin: 50}}>
        Press me
      </Button>
    </View>
  );
};

export default App;

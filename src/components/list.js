import React, {useState, useEffect, useContext} from 'react';
import {View, FlatList} from 'react-native';
import {Avatar, IconButton, Card, Title, Searchbar} from 'react-native-paper';
import ItemList from './itemList';
import swr from '_constants/mocks';
import theme from '_constants/theme';
import {usePlay} from '_globals/state/sound';
import {t} from '_translations/i18n';

const List = ({playerRef}) => {
  const [pauseIcon, setPauseIcon] = useState(false);
  const [pauseIcon1, setPauseIcon1] = useState(false);
  const [state, actions] = usePlay();

  return (
    <View
      style={{
        backgroundColor: theme.light.colors.primary4,
        borderRadius: 40,
        marginTop: 55,
        padding: 10,
      }}>
      {/* <Searchbar
        style={{
          marginBottom: 6,
          borderRadius: 15,
          marginTop: 20,
          margin: 10,
          backgroundColor: '#faeedf',
        }}
        placeholder="Search"
        //   onChangeText={onChangeSearch}
        //   value={searchQuery}
      /> */}
      <FlatList
        data={swr}
        renderItem={({item}) => (
          <ItemList
            name={t (item.name)}
            url={item.url}
            duration={item.duration}
            playerRef={playerRef}
          />
        )}
      />
    </View>
  );
};

export default List;

import React from 'react';
import {FlatList} from 'react-native';
import Item from './item';
import {Surahs} from '_constants/mocks';
const SuraList = () => {
  const renderItem = (props) => <Item {...props} />;
  return <FlatList data={Surahs} renderItem={renderItem} />;
};

export default SuraList;

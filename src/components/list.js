import React ,{useState,useEffect,useContext} from 'react';
import {View} from 'react-native';
import {Avatar, IconButton, Card, Title, Searchbar} from 'react-native-paper';
import ItemList from './itemList';
import theme from '../constants/theme';
import { SurahsContext } from "../contexts/todoList";

const List = () => { 
  const {surahsList}=useContext(SurahsContext)

  
  const [pauseIcon, setPauseIcon] = useState(false);
  const [pauseIcon1, setPauseIcon1] = useState(false);

    return (
    <View
      style={{
        backgroundColor: theme.light.colors.primary4,
        borderRadius: 40,
        marginTop: 65,
        padding: 10,
      }}>
       <Searchbar
        style={{marginBottom: 6, borderRadius: 15, marginTop: 20, margin: 10 ,backgroundColor:'#faeedf'}}
        placeholder="Search"
        //   onChangeText={onChangeSearch}
        //   value={searchQuery}

      /> 


      {surahsList.map((surah) => {
          return (

              <ItemList  name={surah.name} url={surah.url} duration={surah.duration}/>
      
          );
        })} 


 

     
    </View>
  );
};

export default List;

import React, { useState, createContext } from "react";
import {setLanguage, t} from '../translations/i18n';
import Surahs from '../constants/mocks'

export const SurahsContext = createContext();

const SurahsProvider = (props) => {
  const [surahsList, setSurahsList] = useState(
   Surahs
  );
 
  const addTodo = (newTodo) => {
    setSurahsList([...surahsList, { name: newTodo, id: surahsList.length }]);
    console.log(surahsList)
  };
  return (
    <SurahsContext.Provider value={{ surahsList, addTodo }}>
      {props.children}
    </SurahsContext.Provider>
  );
};

export default SurahsProvider;

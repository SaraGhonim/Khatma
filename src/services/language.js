import AsyncStorage from '@react-native-async-storage/async-storage';

const LANG_STORAGE_KEY = '@language';
export const getLanguage = async () => {
  try {
    const language = await AsyncStorage.getItem(LANG_STORAGE_KEY);
    if (language) {
      return language;
    } else {
      return null;
    }
  } catch (err) {
    console.log('err', err);
    return null;
  }
};

export const setLanguage = async (language) => {
  try {
    await AsyncStorage.setItem(LANG_STORAGE_KEY, language);
  } catch (err) {
    console.log('err', err);
  }
};

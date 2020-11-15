import AsyncStorage from '@react-native-async-storage/async-storage';

const LAUNCHED_KEY = '@launched';
export const getLaunched = async () => {
  try {
    const launched = await AsyncStorage.getItem(LAUNCHED_KEY);
    if (launched) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log('err', err);
    return null;
  }
};

export const setLaunched = async () => {
  try {
    await AsyncStorage.setItem(LAUNCHED_KEY, 'true');
  } catch (err) {
    console.log('err', err);
  }
};

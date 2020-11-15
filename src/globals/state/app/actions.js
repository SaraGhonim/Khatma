import {getLanguage, setLanguage} from '_services/language';
import {getLaunched, setLaunched} from '_services/launched';
import {setI18nConfig} from '_translations/i18n';
import RNRestart from 'react-native-restart';
export default {
  toggle: () => ({setState, getState}) => {
    const currentCount = getState().play;
    setState({play: currentCount + 1});
  },
  retrieveLaunched: () => async ({setState, getState}) => {
    try {
      //  get current language
      let launched = await getLaunched();
      // setI18n
      // setState
      setState({launched});
    } catch (err) {
      console.log('err', err);
    }
  },
  setLaunched: () => async ({setState, getState}) => {
    try {
      await setLaunched();
      // setState
      setState({launched: true});
    } catch (err) {
      console.log('err', err);
    }
  },
  retrieveLanguage: () => async ({setState, getState}) => {
    try {
      //  get current language
      let language = await getLanguage();
      // setI18n
      if (language) {
        language = JSON.parse(language);
        await setI18nConfig(language);
      }
      // setState
      setState({language});
    } catch (err) {
      console.log('err', err);
    }
  },
  setLanguage: (languageTag) => async ({setState, getState}) => {
    try {
      const isRTL = languageTag === 'ar' ? true : false;
      const language = {languageTag, isRTL};
      //  get current language
      const stringLanuguage = JSON.stringify(language);
      await setLanguage(stringLanuguage);
      // setI18n
      await setI18nConfig(language);
      // setState
      setState({language});
      RNRestart.Restart();
    } catch (err) {
      console.log('err', err);
    }
  },
};

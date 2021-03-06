import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize'; // Use for caching/memoize for better performance
import {I18nManager} from 'react-native';

const translationGetters = {
  // lazy requires (metro bundler does not support symlinks)
  ar: () => require('./ar.json'),
  en: () => require('./en.json'),
};
const t = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

const setI18nConfig = (language) => {
  console.log('language', language);
  // fallback if no available language fits
  const fallback = {languageTag: 'en', isRTL: false};
  const {languageTag, isRTL} =
    language ||
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;
  console.log('languageTag', languageTag);
  // clear translation cache
  t.cache.clear();
  // update layout direction
  I18nManager.forceRTL(isRTL);
  // set i18n-js config
  i18n.translations = {[languageTag]: translationGetters[languageTag]()};
  i18n.locale = languageTag;
};

const setLanguage = async (language) => {
  const {languageTag, isRTL} = language;
  t.cache.clear();
  // update layout direction
  I18nManager.forceRTL(isRTL);
  // set i18n-js config
  i18n.translations = {[languageTag]: translationGetters[languageTag]()};
  i18n.locale = languageTag;
};
export {t, setI18nConfig, setLanguage, i18n};

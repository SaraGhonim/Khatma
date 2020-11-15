import {createStore, createHook} from 'react-sweet-state';
import actions from './actions';
// This is the value of the store on initialisation

const AppStore = createStore({
  initialState: {language: null, launched: null},
  actions,
});

export const useApp = createHook(AppStore);

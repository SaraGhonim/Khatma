import {createStore, createHook} from 'react-sweet-state';
import actions from './actions';
// This is the value of the store on initialisation

const PlayerStore = createStore({
  initialState: {playerState: null, selectedTrack: null, isInitializing: true},
  actions,
});

export const usePlayer = createHook(PlayerStore);

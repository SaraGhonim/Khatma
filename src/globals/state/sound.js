import {createStore, createHook} from 'react-sweet-state';

// This is the value of the store on initialisation

const Store = createStore({
  initialState: {play: true},
  actions: {
    toggle: () => ({setState, getState}) => {
      const currentState = getState().play;
      setState({play: !currentState});
    },
  },
});

export const useCounter = createHook(Store);

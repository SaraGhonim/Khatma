import { createStore ,createHook} from 'react-sweet-state';

// This is the value of the store on initialisation

const Store = createStore({
  initialState: { play: 0 },
  actions: {
    toggle: () => ({ setState, getState }) => {
      const currentCount = getState().play;
      setState({ play: currentCount+1  });
    },
  },
});

export const useCounter = createHook(Store);

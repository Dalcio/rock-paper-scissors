import { combine, devtools, persist } from 'zustand/middleware';

import create from 'zustand';

import { TStoreState, TStoreActions, TStore } from './store.types';

import storeActions from './store.actions';

const storeState: TStoreState = {
  score: 0,
  turn: 'human',
  playerHost: 'human',
  multiplayer: undefined,
};

let store = combine<TStoreState, TStoreActions, any, any>(storeState, storeActions);

store = persist(store);
store = devtools(store, {
  name: 'rock-paper-scissors',
});

const useStore = create<TStore>(store);

export default useStore;

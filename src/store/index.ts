import create from 'zustand';
import { combine, devtools, persist } from 'zustand/middleware';
import { APP_NAME } from 'constants/application';
import storeActions from './store.actions';
import { TStoreState, TStoreActions, TStore } from './store.types';

const storeState: TStoreState = {
  score: 0,
  turn: 'human',
  playerHost: 'human',
  multiplayer: undefined,
};

let store = combine<TStoreState, TStoreActions, any, any>(storeState, storeActions);

store = persist(store);
store = devtools(store, {
  name: APP_NAME,
});

const useStore = create<TStore>(store);

export default useStore;

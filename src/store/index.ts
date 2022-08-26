import { persist, devtools } from 'zustand/middleware';
import createStore, { StateCreator } from 'zustand';

type TStoreState = {
  score: number;
  turn: 'human' | 'computer' | 'human-one';
};

type TStoreActions = {
  changeTurn: () => void;
};

type TStore = StateCreator<TStoreState, [], [], TStoreActions>;

let store = createStore<TStore>();

store = persist(store);
store = devtools(store);

export const useStore = () => createStore<TStore>(store);

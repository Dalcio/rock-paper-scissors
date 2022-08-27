import { StateCreator } from 'zustand';
import { TStoreActions, TStoreState } from './store.types';

const storeActions: StateCreator<TStoreState, any, any, TStoreActions> = (set, get) => ({
  handleTurn() {
    const { multiplayer } = get();

    if (multiplayer) {
      set((state) => ({ turn: state.turn === 'human' ? 'guest' : 'human' }));
    } else {
      set((state) => ({ turn: state.turn === 'human' ? 'computer' : 'human' }));
    }
  },
  setMultiplayer(multiplayer) {
    set(() => ({ multiplayer }));
  },
  setPlayerHost(host) {
    set(() => ({ playerHost: host }));
  },
  setScore(score) {
    set(() => ({ score }));
  },
});

export default storeActions;

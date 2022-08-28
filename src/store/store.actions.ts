import { GAME_VALUES } from 'constants/application';
import { StateCreator } from 'zustand';
import { getWinner } from './store.helpers';
import { TGameValues, TStoreActions, TStoreState } from './store.types';

const storeActions: StateCreator<TStoreState, any, any, TStoreActions> = (set, get) => ({
  setScore(score) {
    set({ score });
  },
  nextStep(step?: number) {
    if (step) {
      set({ step });
    } else {
      set((state) => ({ step: state.step + 1 }));
    }
  },
  playAgain() {
    set({ humanValue: undefined, computerValue: undefined, step: 0, winner: undefined });
  },
  onHumanPlay(value) {
    set((state) => ({
      humanValue: value,
      step: state.step + 1,
    }));
  },
  onComputerPlay() {
    const random = Math.floor(Math.random() * GAME_VALUES.length);

    const computerValue: TGameValues = GAME_VALUES[random];

    set({ computerValue });

    setTimeout(() => {
      const { humanValue } = get();

      if (humanValue === computerValue) {
        set({ winner: (humanValue === computerValue && 'draw') || undefined });
      } else if (humanValue) {
        const winner = getWinner(humanValue, computerValue);

        set((state) => ({
          winner: winner === humanValue ? 'human' : 'computer',
          score: winner === humanValue ? state.score + 1 : state.score > 0 ? state.score - 1 : 0,
        }));
      }
    }, 1000);
  },
});

export default storeActions;

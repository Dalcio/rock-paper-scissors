type TCurrentPlayer = 'human' | 'computer'; //| 'guest';

export type TGameValues = 'rock' | 'paper' | 'scissors' | 'lizard' | 'spock';

export type TStoreState = {
  score: number;
  step: number;
  humanValue: TGameValues | undefined;
  computerValue: TGameValues | undefined;
  winner: TCurrentPlayer | 'draw' | undefined;
};

export type TStoreActions = {
  nextStep: (step?: number) => void;
  playAgain: () => void;
  onComputerPlay: () => void;
  onHumanPlay: (value: TGameValues) => void;
  setScore: (score: number) => void;
};

export type TStore = TStoreState & TStoreActions;

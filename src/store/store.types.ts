type TCurrentPlayer = 'human' | 'computer' | 'guest';

export type TStoreState = {
  score: number;
  playerHost: TCurrentPlayer;
  turn: TCurrentPlayer;
  multiplayer?: string | undefined;
};

export type TStoreActions = {
  handleTurn: () => void;
  setPlayerHost: (playerHost: TCurrentPlayer) => void;
  setScore: (score: number) => void;
  setMultiplayer: (multiplayer: string) => void;
};

export type TStore = TStoreState & TStoreActions;

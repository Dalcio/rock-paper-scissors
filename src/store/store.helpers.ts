import { TGameValues } from './store.types';

export const winner: {
  [key in TGameValues]: {
    [keyTwo in TGameValues]?: key;
  };
} = {
  rock: {
    lizard: 'rock',
    scissors: 'rock',
  },
  paper: {
    spock: 'paper',
    rock: 'paper',
  },
  scissors: {
    paper: 'scissors',
    lizard: 'scissors',
  },
  lizard: {
    spock: 'lizard',
    paper: 'lizard',
  },
  spock: {
    scissors: 'spock',
    rock: 'spock',
  },
};

export const getWinner = (first: TGameValues, second: TGameValues) => winner[first][second];

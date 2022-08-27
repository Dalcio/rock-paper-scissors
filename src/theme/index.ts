import { MantineProviderProps } from '@mantine/core';

const theme: MantineProviderProps['theme'] = {
  colors: {
    rock: ['hsl(349, 71%, 52%)', 'hsl(349, 70%, 56%)'],
    paper: ['hsl(230, 89%, 62%)', 'hsl(230, 89%, 65%)'],
    scissors: ['hsl(39, 89%, 49%)', 'hsl(40, 84%, 53%)'],
    lizard: ['hsl(261, 73%, 60%)', 'hsl(261, 72%, 63%)'],
    spock: ['hsl(189, 59%, 53%)', 'hsl(189, 58%, 57%)'],

    neutral: ['hsl(229, 25%, 31%)', 'hsl(229, 64%, 46%)', 'hsl(217, 16%, 45%)'],

    bg: ['hsl(214, 47%, 23%)', ' hsl(237, 49%, 15%)'],
  },
  fontFamily: 'Barlow Semi Condensed',
};

export default theme;

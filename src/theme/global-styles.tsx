import { Global } from '@mantine/core';

const GlobalStyles = () => (
  <Global
    styles={(theme) => ({
      '*, *::before, *::after': {
        boxSizing: 'border-box',
      },
      '.line-height-0 > span': {
        lineHeight: 1,
      },
      body: {
        ...theme.fn.fontStyles(),
        background:
          theme.colorScheme === 'dark'
            ? theme.fn.radialGradient(theme.colors.bg[0], theme.colors.bg[1])
            : theme.white,
      },
    })}
  />
);

export default GlobalStyles;

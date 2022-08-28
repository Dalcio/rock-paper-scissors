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
        display: 'grid',
        gridTemplateRows: '1fr auto',
        background:
          theme.colorScheme === 'dark'
            ? theme.fn.radialGradient(theme.colors.bg[0], theme.colors.bg[1])
            : theme.white,
      },
      '@keyframes fade': {
        from: {
          opacity: 0.3,
        },
        to: {
          opacity: 0,
        },
      },
    })}
  />
);

export default GlobalStyles;

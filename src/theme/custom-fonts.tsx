import { Global } from '@mantine/core';

const CustomFonts = () => (
  <Global
    styles={[
      {
        '@font-face': {
          fontFamily: 'Barlow Semi Condensed',
          src: 'url(\'/fonts/BarlowSemiCondensedBold.ttf\') format("ttf")',
          fontWeight: 700,
          fontStyle: 'normal',
        },
      },
      {
        '@font-face': {
          fontFamily: 'Barlow Semi Condensed',
          src: 'url(\'/fonts/BarlowSemiCondensedRegular.ttf\') format("ttf")',
          fontWeight: 600,
          fontStyle: 'normal',
        },
      },
    ]}
  />
);

export default CustomFonts;

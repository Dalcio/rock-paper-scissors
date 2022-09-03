import Head from 'next/head';
import CustomFonts from 'theme/custom-fonts';
import theme from 'theme';

import { GetServerSidePropsContext } from 'next';
import { useState } from 'react';
import { AppProps } from 'next/app';
import { getCookie, setCookies } from 'cookies-next';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { APP_NAME } from 'constants/application';
import GlobalStyles from 'theme/global-styles';

const useColorScheme = (init: ColorScheme) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(init);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookies(APP_NAME, nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  return {
    colorScheme,
    toggleColorScheme,
  };
};
export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const { colorScheme, toggleColorScheme } = useColorScheme(props.colorScheme);

  return (
    <>
      <Head>
        <title>Rock Paper Scissors</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon-32x32.png" />
      </Head>
      <></>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{ ...theme, colorScheme }}>
          <CustomFonts />
          <GlobalStyles />
          <Component {...pageProps} />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie(APP_NAME, ctx) || 'dark',
});

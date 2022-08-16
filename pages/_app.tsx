import { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { useLocalStorage } from '@mantine/hooks';
import '../public/global.css';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'dark',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <>
      <Head>
        <title>jaldegren.dev | Anton Jaldegren – Front End Developer</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta
          name="description"
          content="I'm a passionate problem solver specialized in building exceptional digital experiences for the web. My focus is Front End Development and I create accessible and responsive solutions using modern technologies."
        />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link
          rel="preload"
          as="font"
          href="/files/nunito-sans-latin-400-normal.woff2"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          href="/files/nunito-sans-latin-700-normal.woff2"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          href="/files/montserrat-latin-800-normal.woff2"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          theme={{
            colorScheme: colorScheme,
            colors: {
              // dark: [
              //   '#F8FAFC',
              //   '#F1F5F9',
              //   '#94A3B8',
              //   '#919eb9',
              //   '#7282a5',
              //   '#58698b',
              //   '#44526d',
              //   '#1E293B',
              //   '#1c2330',
              //   '#0F172A',
              // ],
              // gray: [
              //   '#F8FAFC',
              //   '#F1F5F9',
              //   '#94A3B8',
              //   '#919eb9',
              //   '#7282a5',
              //   '#44526d',
              //   '#58698b',
              //   '#1E293B',
              //   '#1c2330',
              //   '#0F172A',
              // ],
            },
            primaryColor: 'indigo',
            // white: '#F1F5F9',
            white: '#FFFFFF',
            black: '#1E293B',
            fontFamily: 'Nunito Sans, sans-serif',
            headings: { fontFamily: 'Montserrat, sans-serif' },
            other: {
              navbarHeight: 65,
              drawerTransitionDuration: 200,
              scrollDuration: 500,
            },
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          <NotificationsProvider>
            <RecoilRoot>
              <Component {...pageProps} />
            </RecoilRoot>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

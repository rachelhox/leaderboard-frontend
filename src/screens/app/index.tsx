import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { GeneralProvider, SocketProvider } from '@contexts';
import createEmotionCache from '../../misc/createEmotionCache';
import InnerApp from './inner_app';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  // eslint-disable-next-line react/require-default-props
  emotionCache: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <GeneralProvider>
        <SocketProvider>
          <InnerApp pageProps={pageProps} Component={Component} />
        </SocketProvider>
      </GeneralProvider>
    </CacheProvider>
  );
}

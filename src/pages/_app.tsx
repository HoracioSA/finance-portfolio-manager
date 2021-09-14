import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

import Layout from '../components/Layout';
import GlobalStyle from '../globalStyles';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Asset | portfolio</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyle />
    </>
  );
}

export default MyApp;

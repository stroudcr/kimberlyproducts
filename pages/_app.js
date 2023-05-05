import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Analytics } from '@vercel/analytics';

import { Layout } from '../components';
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
      
      <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
        <Analytics />
      </Layout>
      </StateContext>
  )
}

export default MyApp
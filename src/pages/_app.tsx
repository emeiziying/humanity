// pages/_app.js

// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';
import { ComponentProps } from 'react';

function MyApp({ Component, pageProps }: ComponentProps<any>) {
  // 2. Use at the root of your app
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;

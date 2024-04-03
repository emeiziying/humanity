import type { Metadata } from 'next';
import React from 'react';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Humanity',
  description: 'A simulation game of human development history',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <React.StrictMode>
          <Providers>{children}</Providers>
        </React.StrictMode>
      </body>
    </html>
  );
}

import Nav from '@/components/Navbar';
import type { Metadata } from 'next';
import React from 'react';
import './globals.css';
import StoreProvider from './store-provider';
import ThemeProvider from './theme-provider';

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
          <ThemeProvider>
            <StoreProvider>
              <Nav />
              {children}
            </StoreProvider>
          </ThemeProvider>
        </React.StrictMode>
      </body>
    </html>
  );
}

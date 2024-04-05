'use client';
import Nav from '@/components/Navbar';
import { AppStore, makeStore } from '@/lib/store';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes';
import { useRef } from 'react';
import { Provider as ReduxProvider } from 'react-redux';

export function Providers({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return (
    <NextUIProvider>
      <ThemeProvider attribute='class'>
        <ReduxProvider store={storeRef.current}>
          <Nav />
          {children}
        </ReduxProvider>
      </ThemeProvider>
    </NextUIProvider>
  );
}

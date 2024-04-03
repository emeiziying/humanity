'use client';
import Nav from '@/components/Navbar';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ThemeProvider attribute='class'>
        <Nav />
        {children}
      </ThemeProvider>
    </NextUIProvider>
  );
}

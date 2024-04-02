'use client';
import useDarkMode from '@/hooks/useDarkMode';
import { NextUIProvider } from '@nextui-org/react';
import classNames from 'classnames';

export function Providers({ children }: { children: React.ReactNode }) {
  const darkMode = useDarkMode();

  return (
    <NextUIProvider
      className={classNames('text-foreground bg-background', {
        dark: darkMode,
      })}
    >
      {children}
    </NextUIProvider>
  );
}

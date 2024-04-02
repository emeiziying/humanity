'use client';
import { useEventListener, useLocalStorageState } from 'ahooks';

const useDarkMode = () => {
  const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)');

  const [darkMode, setDarkMode] = useLocalStorageState('DARK_MODE', {
    defaultValue: darkModePreference.matches,
  });

  useEventListener(
    'change',
    (e: MediaQueryList) => {
      setDarkMode(e.matches);
    },
    { target: darkModePreference as any }
  );

  return darkMode;
};

export default useDarkMode;

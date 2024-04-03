'use client';

import { Icon } from '@iconify/react';
import { Button } from '@nextui-org/react';
import classNames from 'classnames';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const themeList = [
    { name: 'light', icon: 'iconamoon:mode-light-light' },
    { name: 'system', icon: 'ph:desktop-light' },
    { name: 'dark', icon: 'iconamoon:mode-dark-light' },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className='flex items-center bg-background border-1 border-solid border-gray-300 rounded-full p-1'>
      {themeList.map((item) => (
        <Button
          key={item.name}
          isIconOnly
          size='sm'
          variant='light'
          radius='full'
          className={classNames(
            theme === item.name && 'bg-gray-300/40 hover:!bg-gray-300/40'
          )}
          onClick={() => setTheme(item.name)}
        >
          <Icon icon={item.icon} className='text-lg' />
        </Button>
      ))}
    </div>
  );
}

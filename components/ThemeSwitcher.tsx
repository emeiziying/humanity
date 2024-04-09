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
    <div className='flex items-center rounded-full border-1 border-solid border-gray-300 bg-background p-1'>
      {themeList.map((item) => (
        <Button
          key={item.name}
          isIconOnly
          size='sm'
          variant='light'
          radius='full'
          className={classNames({
            'bg-foreground/20 hover:!bg-foreground/20': theme === item.name,
          })}
          onClick={() => setTheme(item.name)}
        >
          <Icon icon={item.icon} className='text-lg' />
        </Button>
      ))}
    </div>
  );
}

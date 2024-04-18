'use client';

import { useAppSelector } from '@/store/hooks';
import { SectionKey } from '@/types/store';
import { Progress } from '@nextui-org/react';
import { useWhyDidYouUpdate } from 'ahooks';

export interface SectionItemT {
  sectionName: SectionKey;
  valueKey?: string;
}

interface SectionItemProps extends SectionItemT {
  itemId: string;
}

export default function SectionItem(props: SectionItemProps) {
  const { sectionName, itemId, valueKey } = props;
  const item = useAppSelector((state) => state[sectionName].entities[itemId]);

  useWhyDidYouUpdate(`SectionItem ${sectionName} ${itemId}`, { item });

  return (
    <div className='flex items-center justify-between'>
      <div>{item.name}</div>
      {!!valueKey && <div className='min-w-10'>{item[valueKey]}</div>}

      {sectionName === 'tasks' && (
        <Progress
          aria-label='Loading...'
          value={item.duration / 10}
          className='max-w-md'
          disableAnimation
        />
      )}
    </div>
  );
}

'use client';

import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { SectionKey } from '@/types/store';
import { Progress } from '@nextui-org/react';
import { useWhyDidYouUpdate } from 'ahooks';

export interface SectionItemT<
  T extends SectionKey = SectionKey,
  U = RootState[T]['entities'][string]
> {
  sectionName: T;
  valueKey?: keyof U;
}

interface SectionItemProps extends SectionItemT {
  itemId: string;
}

function SectionItem(props: SectionItemProps) {
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

export default SectionItem;

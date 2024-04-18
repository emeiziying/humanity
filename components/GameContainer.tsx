'use client';

import { useDelta } from '@/hooks/useDelta';
import { useAppDispatch } from '@/store/hooks';
import { updateTasks } from '@/store/modules/tasksSlice';
import { updateWorkers } from '@/store/modules/workersSlice';
import { useRafInterval } from 'ahooks';
import OverviewCard from './OverviewCard';
import SectionCard from './SectionCard';
import { SectionItemT } from './SectionItem';

const GameContainer = () => {
  const sectionList: SectionItemT[] = [
    { sectionName: 'workers', valueKey: 'capacity' },
    // { sectionName: 'warehouse', valueKey: 'amount' },
    // { sectionName: 'building' },
    // { sectionName: 'tasks', valueKey: '' },
  ];

  const dispatch = useAppDispatch();
  const getDelta = useDelta();

  useRafInterval(() => {
    const delta = getDelta();

    // update all task
    dispatch(updateTasks(delta));
    dispatch(updateWorkers(delta));
  }, 100);

  console.log('GameContainer update');

  return (
    <div className='flex w-full flex-col'>
      <OverviewCard />
      <div className='grid grid-cols-3 gap-2 pt-2'>
        {sectionList.map((item) => (
          <SectionCard key={item.sectionName} {...item} />
        ))}
      </div>
    </div>
  );
};

export default GameContainer;

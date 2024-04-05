import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { updateCost, updateWarehouse } from '@/store/modules/gameSlice';
import { useRafInterval } from 'ahooks';
import { useEffect, useState } from 'react';

interface Props {
  itemId: number;
}

const Building = (props: Props) => {
  // const timestamp = useAppSelector((state) => state.game.timestamp);
  const [timestamp, setTimestamp] = useState(0);
  const building = useAppSelector((state) =>
    state.game.buildings.find((b) => b.id === props.itemId)
  );

  const [process, setProcess] = useState(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimestamp(+Date.now());
  }, []);

  useRafInterval(() => {
    // console.log('Building', building);
    if (!building || !timestamp) return;
    const { cost, current_cost } = building;
    const now = +Date.now();
    const delta = now - timestamp;
    setTimestamp(now);

    // console.log('delta', delta, cost, current_cost);

    const new_cost = current_cost + delta;
    const new_process = Math.round((new_cost / cost) * 100);

    if (new_cost > cost) {
      setProcess(new_process - 100);
      dispatch(updateCost({ id: building.id, cost: new_cost - cost }));
      building.outputs.forEach((output) => {
        dispatch(updateWarehouse({ id: output.id, amount: output.amount }));
      });
    } else {
      setProcess(new_process);
      dispatch(updateCost({ id: building.id, cost: new_cost }));
    }
  }, 16);

  if (!building) return null;

  return (
    <div className='w-full'>
      <div className='flex w-full items-center justify-between'>
        <div>{building.name}</div>
        <div>{building.workers.length}</div>
      </div>
      {process}
      {/* <Progress
        aria-label='Loading...'
        value={process}
        className='max-w-md'
        disableAnimation
      /> */}
    </div>
  );
};

export default Building;

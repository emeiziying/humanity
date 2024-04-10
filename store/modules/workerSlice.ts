import { SectionItem } from '@/types/store';
import { createEntityAdapter, createSlice, nanoid } from '@reduxjs/toolkit';
import { RootState } from '../store';

enum WorkerType {
  Woodcutter = 'Woodcutter',
  Miner = 'Miner',
  Farmer = 'Farmer',
  Builder = 'Builder',
}

export enum Gender {
  Male = 1,
  Female = 2,
}

export enum WorkerStatus {
  Idle = 'Idle',
  Working = 'Working',
  Carrying = 'Carrying',
}

export interface WorkerItem extends SectionItem {
  type?: WorkerType;
  /** 产能 */
  capacity: number;
  age?: number;
  gender?: Gender;
  status?: WorkerStatus;
  houseId?: string;
  workingBuildingId?: string;
}

const workerAdapter = createEntityAdapter<WorkerItem>();

export const workerSlice = createSlice({
  name: 'worker',
  initialState: workerAdapter.getInitialState(undefined, [
    { id: '1', name: 'John', capacity: 1 },
    { id: '2', name: 'Tom', capacity: 1 },
  ]),
  reducers: {
    addWorker: {
      reducer: workerAdapter.addOne,
      prepare: (payload: Omit<WorkerItem, 'id'>) => {
        return { payload: { id: nanoid(), ...payload } };
      },
    },
  },
});

export const { selectAll, selectById, selectTotal, selectIds } =
  workerAdapter.getSelectors<RootState>((state) => state.worker);

export const { addWorker } = workerSlice.actions;

export default workerSlice.reducer;

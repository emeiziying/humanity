import { createEntityAdapter, createSlice, nanoid } from '@reduxjs/toolkit';
import { RootState } from '../store';

enum WorkerType {
  Woodcutter = 'Woodcutter',
  Miner = 'Miner',
  Farmer = 'Farmer',
  Builder = 'Builder',
}

export interface WorkerItem {
  id: string;
  name: string;
  capacity: number;
}

const workerAdapter = createEntityAdapter<WorkerItem>();

export const workerSlice = createSlice({
  name: 'worker',
  initialState: workerAdapter.getInitialState({
    ids: ['1', '2'],
    entities: {
      1: { id: '1', name: 'John', capacity: 1 },
      2: { id: '2', name: 'Tom', capacity: 1 },
    },
  }),
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

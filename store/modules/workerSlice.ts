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
  type?: WorkerType;
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

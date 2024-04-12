import { SectionItem } from '@/types/store';
import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
  nanoid,
} from '@reduxjs/toolkit';
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
  status?: WorkerStatus;
  // houseId?: string;
  // workingBuildingId?: string;
  // 搬运-生产-搬运
  taskQueue: string[];
  timestamp?: number;
}

const workerAdapter = createEntityAdapter<WorkerItem>();

export const workerSlice = createSlice({
  name: 'worker',
  initialState: workerAdapter.getInitialState(undefined, [
    { id: '1', name: 'John', capacity: 1, taskQueue: [] },
    { id: '2', name: 'Tom', capacity: 1, taskQueue: [] },
  ]),
  reducers: {
    addWorker: {
      reducer: workerAdapter.addOne,
      prepare: (payload: Omit<WorkerItem, 'id'>) => {
        return { payload: { id: nanoid(), ...payload } };
      },
    },
    addTasksToWorker: (state, action: PayloadAction<{}>) => {
      //
    },

    update: (state, action: PayloadAction<{ delta: number }>) => {
      const { delta } = action.payload;
      if (!delta) return;

      state.ids.forEach((id) => {
        const worker = state.entities[id];
        // worker.timestamp = delta;
      });
    },
  },
});

export const { selectAll, selectById, selectTotal, selectIds } =
  workerAdapter.getSelectors<RootState>((state) => state.worker);

export const { addWorker } = workerSlice.actions;

export default workerSlice.reducer;

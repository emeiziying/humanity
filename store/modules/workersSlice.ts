import { createAppAsyncThunk, useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { SectionItem } from '@/types/store';
import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
  nanoid,
} from '@reduxjs/toolkit';
import { TaskStatus, selectTaskById } from './tasksSlice';

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
  taskId?: string;
}

const workerAdapter = createEntityAdapter<WorkerItem>();

const findNewTaskForWorker = createAppAsyncThunk(
  'workers/findNewTaskForWorker',
  async (workerId: string, { getState, dispatch }) => {
    //
  }
);

export const updateWorkers = createAppAsyncThunk(
  'workers/updateWorkers',
  async (delta: number, { getState, dispatch }) => {
    const state = getState();

    if (!delta) return;

    const { ids, entities } = state.workers;

    ids.forEach((id) => {
      const worker = entities[id];
      const { taskId } = worker;

      const task = useAppSelector(
        (state) => taskId && selectTaskById(state, taskId)
      );

      if (!task) {
        // dispatch(findNewTaskForWorker(id));
        findNewTaskForWorker(id);
      } else if (task.status === TaskStatus.Done) {
        // 任务完成,更新库存

        // 刷新任务
        findNewTaskForWorker(id);
      }
    });
  }
);

export const workerSlice = createSlice({
  name: 'workers',
  initialState: workerAdapter.getInitialState(),
  reducers: {
    addWorker: {
      reducer: workerAdapter.addOne,
      prepare: (payload: Omit<WorkerItem, 'id'>) => {
        return { payload: { id: nanoid(), ...payload } };
      },
    },
    addTasksToWorker: (state, action: PayloadAction<string>) => {
      //
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateWorkers.fulfilled, (state, action) => {
      // console.log('updateWorkers.fulfilled', action);
    });
  },
});

export const { selectAll, selectById, selectTotal, selectIds } =
  workerAdapter.getSelectors<RootState>((state) => state.workers);

export const { addWorker } = workerSlice.actions;

export default workerSlice.reducer;

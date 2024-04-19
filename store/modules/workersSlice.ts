import { createAppAsyncThunk, useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
  nanoid,
} from '@reduxjs/toolkit';
import { WorkerEntityPrototype } from 'humanity';
import { TaskStatus, selectTaskById } from './tasksSlice';

const workerAdapter = createEntityAdapter<WorkerEntityPrototype>();

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
      const { task_id } = worker;

      const task = useAppSelector(
        (state) => task_id && selectTaskById(state, task_id)
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
      prepare: (
        payload: Omit<WorkerEntityPrototype, 'id' | 'type' | 'name'>
      ): { payload: WorkerEntityPrototype } => {
        return {
          payload: { id: nanoid(), type: 'worker', name: 'Worker', ...payload },
        };
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

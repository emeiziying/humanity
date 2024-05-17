import type { RootState } from '@/store/store';
import type {
  PayloadAction} from '@reduxjs/toolkit';
import {
  createEntityAdapter,
  createSlice,
  nanoid,
} from '@reduxjs/toolkit';
import type { TaskEntityPrototype } from 'humanity';

const tasksAdapter = createEntityAdapter<TaskEntityPrototype>();

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksAdapter.getInitialState(),
  reducers: {
    addTask: {
      reducer: tasksAdapter.addOne,
      prepare: (payload: Omit<TaskEntityPrototype, 'id' | 'status'>) => ({
        payload: { id: nanoid(), ...payload },
      }),
    },
    updateTasks: (state, action: PayloadAction<number>) => {
      const delta = action.payload || 1;
      state.ids.forEach((id) => {
        const task = state.entities[id];
        // if (task.status !== TaskStatus.Working) return;

        // task.current += delta;

        // if (task.current >= task.duration) {
        //   task.status = TaskStatus.Done;
        // }
      });
    },
  },
});

export const { selectById: selectTaskById } =
  tasksAdapter.getSelectors<RootState>((state) => state.tasks);

export const { updateTasks } = tasksSlice.actions;

export default tasksSlice.reducer;

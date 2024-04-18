import { RootState } from '@/store/store';
import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
  nanoid,
} from '@reduxjs/toolkit';
import { IngredientPrototype, ProductPrototype } from 'factorio:prototype';

export enum TaskStatus {
  Pending = 'Pending',
  Working = 'Working',
  Done = 'Done',
  Cancel = 'Cancel',
  Fail = 'Fail',
}

interface TaskItem {
  id: string;
  name: string;
  workerId?: string;
  buildingId?: string;
  duration: number;
  current: number;
  ingredients?: IngredientPrototype[];
  results?: ProductPrototype[];
  status: TaskStatus;
}

const tasksAdapter = createEntityAdapter<TaskItem>();

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksAdapter.getInitialState(),
  reducers: {
    addTask: {
      reducer: tasksAdapter.addOne,
      prepare: (payload: Omit<TaskItem, 'id' | 'status'>) => ({
        payload: { id: nanoid(), status: TaskStatus.Working, ...payload },
      }),
    },
    updateTasks: (state, action: PayloadAction<number>) => {
      const delta = action.payload || 1;
      state.ids.forEach((id) => {
        const task = state.entities[id];
        if (task.status !== TaskStatus.Working) return;

        task.current += delta;

        if (task.current >= task.duration) {
          task.status = TaskStatus.Done;
        }
      });
    },
  },
});

export const { selectById: selectTaskById } =
  tasksAdapter.getSelectors<RootState>((state) => state.tasks);

export const { updateTasks } = tasksSlice.actions;

export default tasksSlice.reducer;

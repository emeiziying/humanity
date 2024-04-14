import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
  nanoid,
} from '@reduxjs/toolkit';
import { IngredientPrototype, ProductPrototype } from 'factorio:prototype';

interface TaskItem {
  id: string;
  workerId?: string;
  buildingId?: string;
  duration: number;
  ingredients?: IngredientPrototype[];
  results?: ProductPrototype[];
}

const tasksAdapter = createEntityAdapter<TaskItem>();

const tasks = new Array(200)
  .fill(0)
  .map((_, i) => ({ id: `${i}`, duration: 10 }));

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksAdapter.getInitialState(undefined, tasks),
  reducers: {
    addTask: {
      reducer: tasksAdapter.addOne,
      prepare: (payload: Omit<TaskItem, 'id'>) => ({
        payload: { id: nanoid(), ...payload },
      }),
    },
    update: (state, action: PayloadAction<number>) => {
      const delta = action.payload || 1;
      state.ids.forEach((id) => {
        const task = state.entities[id];

        // const result = task.duration + delta * (0.5 * Math.random() + 0.5);

        // if (result > 1000) {
        //   task.duration = 0;
        // } else {
        //   task.duration = result;
        // }
      });
      // tasksAdapter.updateMany(state, { current });
    },
  },
});

export const { update } = tasksSlice.actions;

export default tasksSlice.reducer;

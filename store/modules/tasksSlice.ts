import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
  nanoid,
} from '@reduxjs/toolkit';

type TaskItem = {
  id: string;
  workerId: string;
  buildingId?: string;
  currentCost: number;
  totalCost: number;
};

const tasksAdapter = createEntityAdapter<TaskItem>();

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksAdapter.getInitialState(),
  reducers: {
    addTask: {
      reducer: tasksAdapter.addOne,
      prepare: (payload: Omit<TaskItem, 'id'>) => ({
        payload: { id: nanoid(), ...payload },
      }),
    },
    updateAllTasks: (state, action: PayloadAction<number>) => {
      const delta = action.payload;
      state.ids.forEach((id) => {
        const task = state.entities[id];
      });
      // tasksAdapter.updateMany(state, { current });
    },
  },
});

export default tasksSlice.reducer;

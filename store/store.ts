import { configureStore } from '@reduxjs/toolkit';
import buildingSlice from './modules/buildingSlice';
import tasksReducer from './modules/tasksSlice';
import warehouseSlice from './modules/warehouseSlice';
import workerReducer from './modules/workerSlice';

export const makeStore = () =>
  configureStore({
    reducer: {
      worker: workerReducer,
      warehouse: warehouseSlice,
      building: buildingSlice,

      tasks: tasksReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

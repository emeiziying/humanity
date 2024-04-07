import { configureStore } from '@reduxjs/toolkit';
import buildingSlice from './modules/buildingSlice';
import warehouseSlice from './modules/warehouseSlice';
import workerSlice from './modules/workerSlice';

export const makeStore = () =>
  configureStore({
    reducer: {
      worker: workerSlice,
      warehouse: warehouseSlice,
      building: buildingSlice,
    },
  });

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

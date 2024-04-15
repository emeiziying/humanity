import { configureStore } from '@reduxjs/toolkit';
import buildingSlice from './modules/buildingSlice';
import housesReducer from './modules/housesSlice';
import tasksReducer from './modules/tasksSlice';
import warehouseSlice from './modules/warehouseSlice';
import workersReducer from './modules/workersSlice';

export const makeStore = () =>
  configureStore({
    reducer: {
      tasks: tasksReducer,

      workers: workersReducer,
      houses: housesReducer,

      warehouse: warehouseSlice,
      building: buildingSlice,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

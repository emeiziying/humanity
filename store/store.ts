import { configureStore } from '@reduxjs/toolkit';
import blocksReducer from './modules/blocksSlice';
import factoriesReducer from './modules/factoriesSlice';
import foodsReducer from './modules/foodsSlice';
import housesReducer from './modules/housesSlice';
import tasksReducer from './modules/tasksSlice';
import technologiesReducer from './modules/technologiesSlice';
import warehousesReducer from './modules/warehousesSlice';
import workersReducer from './modules/workersSlice';

export const makeStore = () =>
  configureStore({
    reducer: {
      tasks: tasksReducer,
      blocks: blocksReducer,
      workers: workersReducer,
      foods: foodsReducer,
      houses: housesReducer,
      factories: factoriesReducer,
      warehouses: warehousesReducer,
      technologies: technologiesReducer,
    },
  });

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

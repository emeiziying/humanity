import { configureStore, EntityState } from '@reduxjs/toolkit';
import { FilterKeysOfType } from './../types/utils.d';
import blocksReducer from './modules/blocksSlice';
import charactersReducer from './modules/charactersSlice';
import factoriesReducer from './modules/factoriesSlice';
import foodsReducer from './modules/foodsSlice';
import housesReducer from './modules/housesSlice';
import resourcesReducer from './modules/resourcesSlice';
import tasksReducer from './modules/tasksSlice';
import technologiesReducer from './modules/technologiesSlice';
import warehousesReducer from './modules/warehousesSlice';

export const makeStore = () =>
  configureStore({
    reducer: {
      tasks: tasksReducer,
      blocks: blocksReducer,
      characters: charactersReducer,
      resources: resourcesReducer,
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

export type SectionKey = FilterKeysOfType<RootState, EntityState<any, string>>;

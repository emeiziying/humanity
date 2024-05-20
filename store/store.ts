import type { FilterKeysOfType } from '@/types/utils.d'
import type { EntityState } from '@reduxjs/toolkit'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import blocksReducer from './modules/blocksSlice'
import charactersReducer from './modules/charactersSlice'
import factoriesReducer from './modules/factoriesSlice'
import foodsReducer from './modules/foodsSlice'
import housesReducer from './modules/housesSlice'
import resourcesReducer from './modules/resourcesSlice'
import tasksReducer from './modules/tasksSlice'
import technologiesReducer from './modules/technologiesSlice'
import warehousesReducer from './modules/warehousesSlice'
import workstationsReducer from './modules/workstationsSlice'

const rootReducer = combineReducers({
  tasks: tasksReducer,
  blocks: blocksReducer,
  characters: charactersReducer,
  workstations: workstationsReducer,
  resources: resourcesReducer,
  foods: foodsReducer,
  houses: housesReducer,
  factories: factoriesReducer,
  warehouses: warehousesReducer,
  technologies: technologiesReducer,
})

export const makeStore = (preloadedState?: RootState) =>
  configureStore({
    preloadedState,
    reducer: rootReducer,
  })

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']

export type SectionKey = FilterKeysOfType<RootState, EntityState<any, string>>

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface WorkerItem {
  id: number;
  name: string;
  capacity: number;
}

interface WarehouseItem {
  id: number;
  name: string;
  amount: number;
}

interface OutputItem {
  id: WarehouseItem['id'];
  amount: number;
}

interface BuildingItem {
  id: number;
  name: string;
  workers: WorkerItem['id'][];
  cost: number;
  outputs: OutputItem[];
  current_cost: number;
}

export interface GameState {
  value: number;
  timestamp: number;

  workers: WorkerItem[];
  warehouses: WarehouseItem[];
  buildings: BuildingItem[];
}

const initialState: GameState = {
  value: 0,
  timestamp: 0,
  workers: [{ id: 1, name: 'John', capacity: 1 }],
  warehouses: [
    { id: 1, name: 'Wood', amount: 0 },
    { id: 2, name: 'Stone', amount: 0 },
  ],
  buildings: [
    {
      id: 1,
      name: 'Forest',
      workers: [1],
      cost: 1000,
      outputs: [{ id: 1, amount: 1 }],
      current_cost: 0,
    },
    {
      id: 2,
      name: 'Quarry',
      workers: [1],
      cost: 3000,
      outputs: [{ id: 2, amount: 1 }],
      current_cost: 0,
    },
  ],
};

// for (let i = 0; i < 100; i++) {
//   initialState.buildings.push(
//     {
//       id: i * 2 + 3,
//       name: 'Forest',
//       workers: [1],
//       cost: 1000,
//       outputs: [{ id: 1, amount: 1 }],
//       current_cost: 0,
//     },
//     {
//       id: i * 2 + 4,
//       name: 'Quarry',
//       workers: [1],
//       cost: 3000,
//       outputs: [{ id: 2, amount: 1 }],
//       current_cost: 0,
//     }
//   );
// }

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    updateWarehouse: (
      state,
      action: PayloadAction<{
        id: WarehouseItem['id'];
        amount: number;
      }>
    ) => {
      const warehouse = state.warehouses.find(
        (b) => b.id === action.payload.id
      );
      warehouse && (warehouse.amount += action.payload.amount);
    },
    updateCost: (
      state,
      action: PayloadAction<{
        id: BuildingItem['id'];
        cost: number;
      }>
    ) => {
      const building = state.buildings.find((b) => b.id === action.payload.id);
      building && (building.current_cost = action.payload.cost);
    },
    updateTimestamp: (state, action: PayloadAction<number>) => {
      state.timestamp = action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  updateTimestamp,
  updateCost,
  updateWarehouse,
} = gameSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.game.value;

export default gameSlice.reducer;

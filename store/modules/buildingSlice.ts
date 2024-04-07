import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { WarehouseItem } from './warehouseSlice';
import { WorkerItem } from './workerSlice';

interface OutputItem {
  warehouseId: WarehouseItem['id'];
  amount: number;
}

interface BuildingItem {
  id: string;
  name: string;
  workers: WorkerItem['id'][];
  cost: number;
  outputs: OutputItem[];
  current_cost: number;
}

const buildingAdapter = createEntityAdapter<BuildingItem>();

export const buildingSlice = createSlice({
  name: 'building',
  initialState: buildingAdapter.getInitialState({
    ids: ['1', '2'],
    entities: {
      1: {
        id: '1',
        name: 'Forest',
        workers: [1],
        cost: 1000,
        outputs: [{ warehouseId: '1', amount: 1 }],
        current_cost: 0,
      },
      2: {
        id: '2',
        name: 'Quarry',
        workers: [1],
        cost: 3000,
        outputs: [{ warehouseId: '2', amount: 1 }],
        current_cost: 0,
      },
    },
  }),
  reducers: {
    updateCost: buildingAdapter.updateOne,
  },
});

export const { selectAll, selectById, selectTotal, selectIds } =
  buildingAdapter.getSelectors<RootState>((state) => state.building);

export const { updateCost } = buildingSlice.actions;

export default buildingSlice.reducer;

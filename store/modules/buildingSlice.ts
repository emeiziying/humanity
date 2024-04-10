import { SectionItem } from '@/types/store';
import { createEntityAdapter, createSlice, nanoid } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { WarehouseItem } from './warehouseSlice';
import { WorkerItem } from './workerSlice';

interface OutputItem {
  warehouseId: WarehouseItem['id'];
  amount: number;
}

interface Job {}

interface BuildingItem extends SectionItem {
  workers: WorkerItem['id'][];
  cost: number;
  outputs: OutputItem[];
  current_cost: number;
  // jobs?:
}

const buildingAdapter = createEntityAdapter<BuildingItem>();

export const buildingSlice = createSlice({
  name: 'building',
  initialState: buildingAdapter.getInitialState(undefined, [
    {
      id: '1' + nanoid(),
      name: 'Forest',
      workers: ['1'],
      cost: 1000,
      outputs: [{ warehouseId: '1', amount: 1 }],
      current_cost: 0,
    },
    {
      id: '2',
      name: 'Quarry',
      workers: ['1'],
      cost: 3000,
      outputs: [{ warehouseId: '2', amount: 1 }],
      current_cost: 0,
    },
  ]),
  reducers: {
    updateCost: buildingAdapter.updateOne,
  },
});

export const { selectAll, selectById, selectTotal, selectIds } =
  buildingAdapter.getSelectors<RootState>((state) => state.building);

export const { updateCost } = buildingSlice.actions;

export default buildingSlice.reducer;

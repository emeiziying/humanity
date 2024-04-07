import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface WarehouseItem {
  id: string;
  name: string;
  amount: number;
}
const warehouseAdapter = createEntityAdapter<WarehouseItem>();

export const warehouseSlice = createSlice({
  name: 'warehouse',
  initialState: warehouseAdapter.getInitialState({
    ids: ['1', '2'],
    entities: {
      1: { id: '1', name: 'Wood', amount: 0 },
      2: { id: '2', name: 'Stone', amount: 0 },
    },
  }),
  reducers: {
    // updateAmount: warehouseAdapter.updateOne,
    addAmount: (
      state,
      action: PayloadAction<{ id: string; amount: number }>
    ) => {
      const { id, amount } = action.payload;
      const warehouse = state.entities[id];
      if (warehouse) {
        warehouse.amount += amount;
      }
    },
  },
});

export const { selectAll, selectById, selectTotal, selectIds } =
  warehouseAdapter.getSelectors<RootState>((state) => state.warehouse);

export const { addAmount } = warehouseSlice.actions;

export default warehouseSlice.reducer;

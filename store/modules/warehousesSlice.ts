import type { SectionItem } from '@/types/store';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

interface TemplateItem extends SectionItem {}

const warehousesAdapter = createEntityAdapter<TemplateItem>();

export const warehousesSlice = createSlice({
  name: 'warehouses',
  initialState: warehousesAdapter.getInitialState(),
  reducers: {},
});

// export const { selectAll, selectById, selectTotal, selectIds } =
//   warehousesAdapter.getSelectors<RootState>((state) => state.warehouses);

export default warehousesSlice.reducer;

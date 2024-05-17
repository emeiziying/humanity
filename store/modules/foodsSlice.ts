import type { SectionItem } from '@/types/store';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

interface TemplateItem extends SectionItem {}

const foodsAdapter = createEntityAdapter<TemplateItem>();

export const foodsSlice = createSlice({
  name: 'foods',
  initialState: foodsAdapter.getInitialState(),
  reducers: {},
});

// export const { selectAll, selectById, selectTotal, selectIds } =
//   foodsAdapter.getSelectors<RootState>((state) => state.foods);

export default foodsSlice.reducer;

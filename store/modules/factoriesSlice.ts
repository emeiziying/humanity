import { SectionItem } from '@/types/store';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

interface TemplateItem extends SectionItem {}

const factoriesAdapter = createEntityAdapter<TemplateItem>();

export const factoriesSlice = createSlice({
  name: 'factories',
  initialState: factoriesAdapter.getInitialState(),
  reducers: {},
});

// export const { selectAll, selectById, selectTotal, selectIds } =
//   factoriesAdapter.getSelectors<RootState>((state) => state.factories);

export default factoriesSlice.reducer;

import { SectionItem } from '@/types/store';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

interface TemplateItem extends SectionItem {}

const technologiesAdapter = createEntityAdapter<TemplateItem>();

export const technologiesSlice = createSlice({
  name: 'technologies',
  initialState: technologiesAdapter.getInitialState(),
  reducers: {},
});

// export const { selectAll, selectById, selectTotal, selectIds } =
//   technologiesAdapter.getSelectors<RootState>((state) => state.technologies);

export default technologiesSlice.reducer;

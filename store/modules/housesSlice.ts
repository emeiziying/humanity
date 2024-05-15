import { SectionItem } from '@/types/store';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { WorkerItem } from './charactersSlice';

interface HouseItem extends SectionItem {
  workers: WorkerItem['id'][];
  cost: number;
}

const houseAdapter = createEntityAdapter<HouseItem>();

export const housesSlice = createSlice({
  name: 'houses',
  initialState: houseAdapter.getInitialState(),
  reducers: {},
});

export const { selectAll, selectById, selectTotal, selectIds } =
  houseAdapter.getSelectors<RootState>((state) => state.houses);

export default housesSlice.reducer;

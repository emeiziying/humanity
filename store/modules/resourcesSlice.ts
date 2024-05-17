import { createAppAsyncThunk } from '@/store/hooks';
import type { SectionItem } from '@/types/store';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

interface OutputItem {
  // item: ResourceItem;
  item: any;
  amount: number;
  /** 概率 0.0-1.0 */
  probability?: number;
}

export interface ResourceItem extends SectionItem {
  // type: string;
  /** 总数 */
  totalAmount: number;
  // 每次采集耗时
  perCost: number;
  // 每次采集的数量
  perAmount: number;
  /** 产出 */
  outputs: OutputItem[];
}

// formula

const defaultResources = [
  {
    id: '1',
    name: 'Forest',
    totalAmount: 999999,
    perCost: 5000,
    perAmount: 1,
    inputs: [],
    outputs: [{ item: { id: '2', name: 'Wood' }, amount: 1 }],
  },
  {
    id: '2',
    name: 'Stone',
    totalAmount: 999999,
    perCost: 10000,
    perAmount: 1,
    outputs: [{ item: { id: '2', name: 'Wood' }, amount: 1 }],
  },
];

const resourcesAdapter = createEntityAdapter<ResourceItem>();

export const updateResources = createAppAsyncThunk(
  'resources/updateResources',
  async (delta: number, { getState, dispatch }) => {
    const state = getState();

    if (!delta) return;

    const { ids, entities } = state.characters;

    ids.forEach((id) => {
      const { task_id } = entities[id];
    });
  }
);

export const resourcesSlice = createSlice({
  name: 'resources',
  initialState: resourcesAdapter.getInitialState(undefined, defaultResources),
  reducers: {},
});

export default resourcesSlice.reducer;

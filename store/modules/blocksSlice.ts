import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { BlockEntityPrototype } from 'humanity';

const blocksAdapter = createEntityAdapter<BlockEntityPrototype>();

const defaultEntities: BlockEntityPrototype[] = [
  {
    type: 'block',
    id: '1',
    name: 'Block 1',
    area_size: 200,
    enabled: true,
    resources: [
      { type: 'resource', name: 'forest', amount: 999, area_size: 20 },
      { type: 'resource', name: 'rock mine', amount: 999, area_size: 5 },
      { type: 'resource', name: 'iron mine', amount: 999, area_size: 5 },
      { type: 'resource', name: 'copper mine', amount: 999, area_size: 5 },
      { type: 'resource', name: 'coal mine', amount: 999, area_size: 5 },
    ],
  },
];

export const blocksSlice = createSlice({
  name: 'blocks',
  initialState: blocksAdapter.getInitialState(undefined, defaultEntities),
  reducers: {
    initializeBlocks: (state, action) => {
      // blocksAdapter.setAll(state, action.payload);
    },
  },
});

// export const { selectAll, selectById, selectTotal, selectIds } =
//   blocksAdapter.getSelectors<RootState>((state) => state.blocks);

export default blocksSlice.reducer;

import blocks from '@/data/modules/blocks';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { BlockEntityPrototype } from 'humanity';

const blocksAdapter = createEntityAdapter<BlockEntityPrototype>();

export const blocksSlice = createSlice({
  name: 'blocks',
  initialState: blocksAdapter.getInitialState(undefined, blocks),
  reducers: {
    initializeBlocks: (state, action) => {
      // blocksAdapter.setAll(state, action.payload);
    },
  },
});

// export const { selectAll, selectById, selectTotal, selectIds } =
//   blocksAdapter.getSelectors<RootState>((state) => state.blocks);

export default blocksSlice.reducer;

import { createEntityAdapter, createSlice, nanoid } from '@reduxjs/toolkit'
import type { WorkstationEntityPrototype } from 'humanity'

const workstationAdapter = createEntityAdapter<WorkstationEntityPrototype>()

export const workstationsSlice = createSlice({
  name: 'workstations',
  initialState: workstationAdapter.getInitialState(),
  reducers: {
    addOne: {
      reducer: workstationAdapter.addOne,
      prepare: (payload) => ({
        payload: {
          ...payload,
          id: nanoid(),
          type: 'workstation',
          name: `workstation_${nanoid(3)}`,
          qty: 1,
        },
      }),
    },
    updateQty: (state, action) => {
      const { id, diff } = action.payload
      const item = state.entities[id]
      workstationAdapter.updateOne(state, {
        id,
        changes: { qty: item.qty + diff },
      })
    },
  },
})

export const { addOne, updateQty } = workstationsSlice.actions

export default workstationsSlice.reducer

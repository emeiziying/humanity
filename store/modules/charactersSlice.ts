import { createAppAsyncThunk, useAppSelector } from '@/store/hooks'
import { selectTaskById } from '@/store/modules/tasksSlice'
import type { RootState } from '@/store/store'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createEntityAdapter, createSlice, nanoid } from '@reduxjs/toolkit'
import type { CharacterEntityPrototype } from 'humanity'

const characterAdapter = createEntityAdapter<CharacterEntityPrototype>()

const findNewTaskForCharacter = createAppAsyncThunk(
  'characters/findNewTaskForCharacter',
  async (workerId: string, { getState, dispatch }) => {
    //
  },
)

export const updateCharacters = createAppAsyncThunk(
  'characters/updateCharacters',
  async (delta: number, { getState, dispatch }) => {
    const state = getState()

    if (!delta) return

    const { ids, entities } = state.characters

    ids.forEach((id) => {
      const { task_id } = entities[id]

      const task = useAppSelector(
        (state) => task_id && selectTaskById(state, task_id),
      )

      if (!task) {
        // dispatch(findNewTaskForWorker(id));
        findNewTaskForCharacter(id)
      } else if (task.status === 'done') {
        // 任务完成,更新库存

        // 刷新任务
        findNewTaskForCharacter(id)
      }
    })
  },
)

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: characterAdapter.getInitialState(),
  reducers: {
    updateCharacter: characterAdapter.updateOne,
    addCharacter2: characterAdapter.addOne,
    addCharacter: {
      reducer: characterAdapter.addOne,
      prepare: (
        payload: Omit<
          CharacterEntityPrototype,
          'id' | 'type' | 'name' | 'task_id' | 'capacity'
        >,
      ): { payload: CharacterEntityPrototype } => {
        const data: CharacterEntityPrototype = {
          id: nanoid(),
          type: 'character',
          name: 'Character',
          task_id: '',
          capacity: 1,
          ...payload,
        }

        console.log('addCharacter', payload, data)

        return {
          payload: data,
        }
      },
    },
    addTasksToCharacter: (state, action: PayloadAction<string>) => {
      //
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateCharacters.fulfilled, (state, action) => {
      // console.log('updateWorkers.fulfilled', action);
    })
  },
})

export const { selectAll, selectById, selectTotal, selectIds } =
  characterAdapter.getSelectors<RootState>((state) => state.characters)

export const { addCharacter, addCharacter2, updateCharacter } =
  charactersSlice.actions

export default charactersSlice.reducer

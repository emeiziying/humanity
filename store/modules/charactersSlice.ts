import { createAppAsyncThunk, useAppSelector } from '@/store/hooks'
import { selectTaskById } from '@/store/modules/tasksSlice'
import type { RootState } from '@/store/store'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createEntityAdapter, createSlice, nanoid } from '@reduxjs/toolkit'
import type { CharacterEntityPrototype } from 'humanity'
import { TaskStatus } from 'humanity'

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
      } else if (task.status === TaskStatus.Done) {
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
    addCharacter: {
      reducer: characterAdapter.addOne,
      prepare: (
        payload: Omit<CharacterEntityPrototype, 'id' | 'type' | 'name'>,
      ): { payload: CharacterEntityPrototype } => {
        return {
          payload: {
            id: nanoid(),
            type: 'character',
            name: 'Character',
            ...payload,
          },
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

export const { addCharacter } = charactersSlice.actions

export default charactersSlice.reducer

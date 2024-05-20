'use client'

import AutoSave from '@/components/AutoSave'
import CharacterCard from '@/components/CharacterCard'
import WorkstationCard from '@/components/WorkstationCard'
import { useDelta } from '@/hooks/useDelta'
import { useAppDispatch } from '@/store/hooks'
import { updateCharacters } from '@/store/modules/charactersSlice'
import { useRafInterval } from 'ahooks'
import OverviewCard from './OverviewCard'
import SectionCard from './SectionCard'
import type { SectionItemT } from './SectionItem'

const GameContainer = () => {
  const sectionList: SectionItemT[] = [
    { sectionName: 'characters', valueKey: 'capacity' },
    // { sectionName: 'resources', valueKey: 'amount' },
    // { sectionName: 'building' },
    // { sectionName: 'tasks', valueKey: '' },
  ]

  const dispatch = useAppDispatch()
  const getDelta = useDelta()

  useRafInterval(() => {
    const delta = getDelta()

    // dispatch(updateResources(delta));
    dispatch(updateCharacters(delta))
  }, 100)

  console.log('GameContainer update')

  return (
    <div className="flex w-full select-none flex-col py-2">
      <AutoSave />

      <OverviewCard />
      <div className="grid grid-cols-3 gap-2 pt-2">
        <CharacterCard />
        <WorkstationCard />
        {sectionList.map((item) => (
          <SectionCard key={item.sectionName} {...item} />
        ))}
      </div>
    </div>
  )
}

export default GameContainer

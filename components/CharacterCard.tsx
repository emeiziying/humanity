'use client'
import { useMountedState } from '@/hooks/useMountedState'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { addOne } from '@/store/modules/charactersSlice'
import { Button, Card, CardBody, CardHeader } from '@nextui-org/react'
import { useWhyDidYouUpdate } from 'ahooks'

const CharacterCard = () => {
  const ids = useAppSelector((state) => state.characters.ids)
  const dispatch = useAppDispatch()
  const mounted = useMountedState()

  useWhyDidYouUpdate('CharacterCard', [ids])

  if (!mounted) return

  return (
    <Card>
      <CardHeader>
        <Button onClick={() => dispatch(addOne({}))}>新增</Button>
      </CardHeader>
      <CardBody>
        {ids.map((e) => (
          <CharacterItem itemId={e} key={e} />
        ))}
      </CardBody>
    </Card>
  )
}

const CharacterItem = (props: { itemId: string }) => {
  const item = useAppSelector(
    (state) => state.characters.entities[props.itemId],
  )

  useWhyDidYouUpdate('CharacterItem', [item])

  return (
    <div className="flex items-center justify-between">
      <div>{item.name}</div>
      <div>status</div>
    </div>
  )
}

export default CharacterCard

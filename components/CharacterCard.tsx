import { useAppSelector } from '@/store/hooks'
import { addCharacter, updateCharacter } from '@/store/modules/charactersSlice'
import { Button, Card, CardBody, CardHeader } from '@nextui-org/react'
import { useWhyDidYouUpdate } from 'ahooks'

type Props = {}

const CharacterCard = (props: Props) => {
  const ids = useAppSelector((state) => state.characters.ids)
  const items = useAppSelector((state) => state.characters.entities)

  useWhyDidYouUpdate('CharacterCard', [ids, items])

  return (
    <Card>
      <CardHeader>
        <Button
          onClick={() => {
            updateCharacter({ id: '1', changes: { name: '2' } })
            addCharacter({})
          }}
        >
          新增
        </Button>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-8 gap-2">
          {ids.map((e) => (
            <CharacterItem itemId={e} key={e} />
          ))}
        </div>
      </CardBody>
    </Card>
  )
}

const CharacterItem = (props: { itemId: string }) => {
  const item = useAppSelector(
    (state) => state.characters.entities[props.itemId],
  )

  return (
    <div className="flex items-center justify-between">
      <div>{item.name}</div>
    </div>
  )
}

export default CharacterCard

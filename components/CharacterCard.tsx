'use client'
import { useMounted } from '@/hooks/useMounted'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { addTodo } from '@/store/modules/charactersSlice'
import { Button, Card, CardBody, CardHeader } from '@nextui-org/react'

type Props = {}

const CharacterCard = (props: Props) => {
  const ids = useAppSelector((state) => state.characters.ids)
  const dispatch = useAppDispatch()
  const mounted = useMounted()

  if (!mounted) return

  return (
    <Card>
      <CardHeader>
        <Button
          onClick={() => {
            console.log(addTodo(1))

            dispatch(addTodo(1))
            dispatch({
              type: 'characters/addTodo',
              payload: { text: 2 },

              // payload: {
              //   id: nanoid(),
              //   name: '1',
              // },
            })
          }}
        >
          新增
        </Button>
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

  return (
    <div className="flex items-center justify-between">
      <div>{item.name}</div>
    </div>
  )
}

export default CharacterCard

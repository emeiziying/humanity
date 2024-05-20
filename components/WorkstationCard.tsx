'use client'
import { useMountedState } from '@/hooks/useMountedState'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { updateQty } from '@/store/modules/workstationsSlice'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Card, CardBody } from '@nextui-org/react'
import classNames from 'classnames'

type Props = {}

const WorkstationCard = (props: Props) => {
  const ids = useAppSelector((state) => state.workstations.ids)
  const dispatch = useAppDispatch()
  const mounted = useMountedState()

  if (!mounted) return

  return (
    <Card>
      <CardBody>
        {ids.map((e) => (
          <WorkstationItem itemId={e} key={e} />
        ))}
      </CardBody>
    </Card>
  )
}

const WorkstationItem = (props: { itemId: string }) => {
  const item = useAppSelector(
    (state) => state.workstations.entities[props.itemId],
  )
  const dispatch = useAppDispatch()

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>{item.name}</div>
        <div className="flex items-center">
          <Icon
            icon="iconamoon:sign-minus-circle"
            className={classNames('text-2xl cursor-pointer', {
              'opacity-50': item.qty <= 0,
            })}
            onClick={() =>
              item.qty >= 1 && dispatch(updateQty({ id: item.id, diff: -1 }))
            }
          />
          <div className="mx-2 min-w-5 text-center">{item.qty}</div>
          <Icon
            icon="iconamoon:sign-plus-circle"
            className="cursor-pointer text-2xl"
            onClick={() => dispatch(updateQty({ id: item.id, diff: 1 }))}
          />
        </div>
      </div>
      <div>1</div>
    </div>
  )
}

export default WorkstationCard

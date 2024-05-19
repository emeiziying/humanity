'use client'

import { useMounted } from '@/hooks/useMounted'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { Button, Card, CardBody, CardHeader } from '@nextui-org/react'
import type { SectionItemT } from './SectionItem'
import SectionItem from './SectionItem'

export default function SectionCard(props: SectionItemT) {
  const { sectionName } = props
  const ids = useAppSelector((state) => state[sectionName].ids)
  const dispatch = useAppDispatch()
  const mounted = useMounted()

  const addOne = () => dispatch({ type: `${sectionName}\addOne`, payload: {} })

  console.log('SectionCard update', sectionName, ids)

  if (!mounted) return

  return (
    <Card>
      <CardHeader>
        <Button onClick={addOne}>新增</Button>
      </CardHeader>
      <CardBody>
        {ids.map((item) => (
          <SectionItem key={item} itemId={item} {...props} />
        ))}
      </CardBody>
    </Card>
  )
}

'use client';

import { useAppSelector } from '@/store/hooks';
import { Card, CardBody } from '@nextui-org/react';
import SectionItem, { SectionItemT } from './SectionItem';

export default function SectionCard(props: SectionItemT) {
  const { sectionName } = props;
  const ids = useAppSelector((state) => state[sectionName].ids);

  console.log('SectionCard update', sectionName, ids);

  return (
    <Card>
      <CardBody>
        {ids.map((item) => (
          <SectionItem key={item} itemId={item} {...props} />
        ))}
      </CardBody>
    </Card>
  );
}

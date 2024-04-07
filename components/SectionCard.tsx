import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { Card, CardBody } from '@nextui-org/react';
import { useWhyDidYouUpdate } from 'ahooks';
import Building from './Building';
import SectionItem from './SectionItem';

export type SectionKey = keyof RootState;

interface SectionCardProps {
  sectionKey: SectionKey;
  valueKey?: string;
}

export default function SectionCard({
  sectionKey,
  valueKey,
}: SectionCardProps) {
  // const state = useAppStore()
  const ids = useAppSelector((state) => state[sectionKey].ids);

  useWhyDidYouUpdate(`SectionCard ${sectionKey}`, { ids });

  return (
    <Card>
      <CardBody>
        {ids.map((item) => {
          if (sectionKey === 'building') {
            return <Building key={item} itemId={item} />;
          } else {
            return (
              <SectionItem
                key={item}
                sectionName={sectionKey}
                itemId={item}
                valueKey={valueKey}
              />
            );
          }
        })}
      </CardBody>
    </Card>
  );
}

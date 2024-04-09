import { useAppSelector } from '@/store/hooks';
import { SectionKey } from '@/types/store';
import { Card, CardBody } from '@nextui-org/react';
import Building from './Building';
import SectionItem from './SectionItem';

interface SectionCardProps {
  sectionKey: SectionKey;
  valueKey?: string;
}

export default function SectionCard({
  sectionKey,
  valueKey,
}: SectionCardProps) {
  const ids = useAppSelector((state) => state[sectionKey].ids);

  console.log('SectionCard update', sectionKey, ids);

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

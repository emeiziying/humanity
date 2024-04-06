import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { Card, CardBody } from '@nextui-org/react';
import Building from './Building';

type FilterKeysOfType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

type GameState = RootState['game'];
export type SectionKey = FilterKeysOfType<GameState, Array<any>>;
type SectionItem<T extends SectionKey> = GameState[T][number];

interface SectionCardProps<T extends SectionKey> {
  sectionKey: T;
  // valueKey?: keyof SectionItem<T>;
  valueKey?: string;
}

export default function SectionCard<T extends SectionKey>({
  sectionKey,
  valueKey,
}: SectionCardProps<T>) {
  const list = useAppSelector((state) => state.game[sectionKey]);

  return (
    <Card>
      <CardBody>
        {list.map((item: any) => {
          if (sectionKey === 'buildings') {
            return <Building key={item.id} itemId={item.id} />;
          } else {
            return (
              <div key={item.id} className='flex items-center justify-between'>
                <div>{item.name}</div>
                {!!valueKey && <div>{item[valueKey]}</div>}
              </div>
            );
          }
        })}
      </CardBody>
    </Card>
  );
}

import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { SectionKey } from '@/types/store';

export interface SectionItemT<
  T extends SectionKey = SectionKey,
  U = RootState[T]['entities'][string]
> {
  sectionName: T;
  valueKey?: keyof U;
}

interface SectionItemProps extends SectionItemT {
  itemId: string;
}

function SectionItem(props: SectionItemProps) {
  const { sectionName, itemId, valueKey } = props;
  const item = useAppSelector((state) => state[sectionName].entities[itemId]);
  return (
    <div className='flex items-center justify-between'>
      <div>{item.name}</div>
      {!!valueKey && <div>{item[valueKey]}</div>}
    </div>
  );
}

export default SectionItem;

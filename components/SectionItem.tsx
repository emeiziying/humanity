import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { SectionKey } from './SectionCard';

interface SectionItemProps {
  sectionName: SectionKey;
  itemId: string;
  valueKey?: keyof RootState[SectionKey]['entities'][number];
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

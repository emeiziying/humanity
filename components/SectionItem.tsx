import { useAppSelector } from '@/store/hooks';
import { SectionKey } from './SectionCard';

function SectionItem(props: {
  sectionName: SectionKey;
  itemId: string;
  valueKey?: string;
}) {
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

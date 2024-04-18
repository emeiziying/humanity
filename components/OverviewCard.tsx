import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { useMemo } from 'react';

const OverviewCard = () => {
  const list = useMemo(() => {
    return [{ label: '人口', value: 10 }];
  }, []);

  return (
    <Card>
      <CardHeader>概况</CardHeader>
      <CardBody>
        <div className='grid grid-cols-8 gap-2'>
          {list.map((e) => (
            <div key={e.label}>
              {e.label}: {e.value}
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default OverviewCard;

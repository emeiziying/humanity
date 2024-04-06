import { useAppSelector } from '@/store/hooks';
import { Card, CardBody } from '@nextui-org/react';
import Building from './Building';

const BuildingCard = () => {
  const buildings = useAppSelector((state) => state.game.buildings);
  return (
    <Card>
      <CardBody>
        {buildings.map((building) => (
          <div key={building.id} className='flex items-center justify-between'>
            <Building itemId={building.id} />
          </div>
        ))}
      </CardBody>
    </Card>
  );
};

export default BuildingCard;

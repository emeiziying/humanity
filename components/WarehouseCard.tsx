import { useAppSelector } from '@/store/hooks';
import { Card, CardBody } from '@nextui-org/react';

const WarehouseCard = () => {
  const warehouses = useAppSelector((state) => state.game.warehouses);

  return (
    <Card>
      <CardBody>
        {warehouses.map((warehouse) => (
          <div key={warehouse.id} className='flex items-center justify-between'>
            <div>{warehouse.name}</div>
            <div>{warehouse.amount}</div>
          </div>
        ))}
      </CardBody>
    </Card>
  );
};

export default WarehouseCard;

import type { BlockEntityPrototype } from 'humanity';

const blocks: BlockEntityPrototype[] = [
  {
    type: 'block',
    id: '1',
    name: 'Block 1',
    area_size: 200,
    enabled: true,
    resources: {
      forest: 999,
      'rock mine': 999,
      'iron mine': 999,
      'copper mine': 999,
      'coal mine': 999,
    },
  },
  {
    type: 'block',
    id: '2',
    name: 'Block 2',
    area_size: 200,
    enabled: false,
    resources: {
      forest: 999,
      'rock mine': 999,
      'iron mine': 999,
      'copper mine': 999,
      'coal mine': 999,
    },
  },
];

export default blocks;

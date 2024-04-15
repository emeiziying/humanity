import { RecipePrototype } from 'humanity';

const products: RecipePrototype[] = [
  {
    type: 'recipe',
    name: 'wooden-plank',
    total_cost: 2,
    ingredients: [{ type: 'item', name: 'wood', amount: 1 }],
    results: [{ type: 'item', name: 'wooden-plank', amount: 2 }],
  },
];

export default products;

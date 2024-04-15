import { RecipePrototype } from 'humanity';

const factories: RecipePrototype[] = [
  {
    type: 'recipe',
    name: 'workbench',
    total_cost: 10,
    ingredients: [{ type: 'item', name: 'wooden', amount: 10 }],
    results: [{ type: 'item', name: 'workbench', amount: 1 }],
  },
];

export default factories;

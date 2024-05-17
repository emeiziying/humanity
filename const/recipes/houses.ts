import type { RecipePrototype } from 'humanity';

const houses: RecipePrototype[] = [
  {
    type: 'recipe',
    name: 'log cabin',
    total_cost: 10,
    ingredients: [{ type: 'item', name: 'wood', amount: 10 }],
    results: [{ type: 'item', name: 'log cabin', amount: 1 }],
  },
];

export default houses;

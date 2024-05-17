import type { RecipePrototype } from 'humanity';

const resources: RecipePrototype[] = [
  {
    type: 'recipe',
    name: 'wood',
    total_cost: 2,
    ingredients: [{ type: 'item', name: 'tree', amount: 1 }],
    results: [{ type: 'item', name: 'wood', amount: 2 }],
  },
  {
    type: 'recipe',
    name: 'stone',
    total_cost: 4,
    ingredients: [{ type: 'item', name: 'rock', amount: 1 }],
    results: [{ type: 'item', name: 'stone', amount: 4 }],
  },
  {
    type: 'recipe',
    name: 'iron-ore',
    total_cost: 2,
    ingredients: [{ type: 'item', name: 'iron mine', amount: 1 }],
    results: [{ type: 'item', name: 'iron-ore', amount: 2 }],
  },
];

export default resources;

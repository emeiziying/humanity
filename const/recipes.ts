import { RecipePrototype } from 'factorio:prototype';

const recipes: RecipePrototype[] = [
  {
    type: 'recipe',
    name: 'iron-plate',
    category: 'smelting',
    energy_required: 3.5,
    ingredients: [['iron-ore', 1]],
    result: 'iron-plate',
  },
  {
    type: 'recipe',
    name: 'coal-liquefaction',
    category: 'oil-processing',
    subgroup: 'fluid-recipes',
    order: 'a[oil-processing]-c[coal-liquefaction]',
    enabled: false,
    energy_required: 5,
    icon: '__base__/graphics/icons/fluid/coal-liquefaction.png',
    icon_size: 32,
    ingredients: [
      { type: 'item', name: 'coal', amount: 10 },
      { type: 'fluid', name: 'heavy-oil', amount: 25 },
      { type: 'fluid', name: 'steam', amount: 50 },
    ],
    results: [
      {
        type: 'fluid',
        name: 'heavy-oil',
        amount: 35,
        amount_min: 0,
        amount_max: 35,
      },
      {
        type: 'fluid',
        name: 'light-oil',
        amount: 15,
        amount_min: 0,
        amount_max: 35,
      },
      {
        type: 'fluid',
        name: 'petroleum-gas',
        amount: 20,
        amount_min: 0,
        amount_max: 35,
      },
    ],
    allow_decomposition: false,
  },
];

export default recipes;

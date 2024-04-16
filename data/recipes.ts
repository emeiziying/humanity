// workers resource product house factory food cloth tool weapon technology medicine education

const recipes = [
  {
    name: 'wood',
    time: 1,
    inputs: { forest: 1 },
    outputs: { wood: 2 },
  },
  {
    name: 'stone',
    time: 2,
    inputs: { 'rock mine': 1 },
    outputs: { stone: 2 },
  },

  {
    name: 'wooden-plank',
    time: 1,
    inputs: { wood: 2 },
    outputs: { 'wooden-plank': 1 },
    producers: ['workbench'],
  },

  {
    name: 'workbench',
    time: 5,
    inputs: { wooden: 10, stone: 10 },
    outputs: { workbench: 1 },
  },
];

export default recipes;

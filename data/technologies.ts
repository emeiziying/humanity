import { TechnologyPrototype } from 'humanity';

const technologies: TechnologyPrototype[] = [
  {
    id: 'automation',
    name: 'Automation',
    category: 'technology',
    row: 1,
    time: 10,
    producers: ['lab'],
    in: {
      'automation-science-pack': 1,
    },
    out: {
      automation: 1,
    },
  },
];

export default technologies;

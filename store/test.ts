interface State {
  workers: { name: string; capacity: number }[];
  warehouses: { name: string; amount: number }[];
}

type StateKey = keyof State;
type ValueKey<T extends StateKey> = keyof State[T][number];

const state: State = {
  workers: [
    { name: 'John', capacity: 1 },
    { name: 'Tom', capacity: 1 },
  ],
  warehouses: [
    { name: 'Wood', amount: 0 },
    { name: 'Stone', amount: 0 },
  ],
};

function Foo<T extends StateKey, U extends ValueKey<T>>(
  stateKey: T,
  valueKey: U
) {
  const list = state[stateKey];
  list.map((item: State[T][number]) => {
    console.log(item[valueKey]);
  });
}

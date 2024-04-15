declare module 'humanity' {
  export interface PrototypeMap {}

  export interface BasePrototype {
    type: keyof PrototypeMap;
    name: string;
  }

  export interface EntityPrototype extends BasePrototype {
    id: string;
  }

  export interface ItemIngredientPrototype extends BasePrototype {
    type: 'item';
    amount: number;
  }

  export interface FluidIngredientPrototype extends BasePrototype {
    type: 'fluid';
    amount: number;
  }

  export type IngredientPrototype =
    | ItemIngredientPrototype
    | FluidIngredientPrototype;

  export interface ItemProductPrototype extends BasePrototype {
    type: 'item';
    amount: number;
  }

  export interface FluidProductPrototype extends BasePrototype {
    type: 'fluid';
    amount: number;
  }

  export type ProductPrototype = ItemProductPrototype | FluidProductPrototype;

  export interface RecipePrototype extends BasePrototype {
    type: 'recipe';
    category?: string;
    total_cost?: number;
    ingredients?: readonly IngredientPrototype[];
    results?: readonly ProductPrototype[];
    enabled?: boolean;
  }

  export interface WorkerPrototype extends EntityPrototype {
    type: 'worker';
    capacity: number;
  }

  export interface HousePrototype extends EntityPrototype {
    type: 'house';
    /** how many workers the house can contain */
    max_capacity: number;
    workers: Pick<WorkerPrototype, 'id'>[];
  }

  export type BuildingPrototype = HousePrototype;
}

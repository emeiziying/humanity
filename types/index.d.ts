declare module 'humanity' {
  export interface BasePrototype {
    type: string;
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

  export interface ResourceProtoType extends BasePrototype {
    type: 'resource';
    name: 'forest' | 'rock mine' | 'iron mine' | 'copper mine' | 'coal mine';
    amount: number;
    area_size: number;
  }

  export interface BlockEntityPrototype extends EntityPrototype {
    type: 'block';
    resources: ResourceProtoType[];
    enabled: boolean;
    area_size: number;
  }

  export interface WorkerEntityPrototype extends EntityPrototype {
    type: 'worker';
    capacity: number;
  }

  export interface HouseEntityPrototype extends EntityPrototype {
    type: 'house';
    /** how many workers the house can contain */
    max_capacity: number;
    workers: Pick<WorkerPrototype, 'id'>[];
  }

  export interface FactoryEntityPrototype extends EntityPrototype {
    type: 'factory';
  }

  export type BuildingPrototype = HousePrototype;
}

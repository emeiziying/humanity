declare module 'humanity' {
  export type Entities<T = string> = Record<string, T>;

  export interface BaseRecipePrototype {
    type: 'recipe';
    category: string;
    id: string;
    name: string;
    time: number;
    producers: string[];
    inputs: Entities<number | string>;
    outputs: Entities<number | string>;
    unlockedBy?: string;
  }

  export interface ItemRecipePrototype extends BaseRecipePrototype {
    category: 'item';
  }

  export interface TechnologyRecipePrototype extends BaseRecipePrototype {
    category: 'technology';
  }

  export type RecipePrototype = TechnologyRecipePrototype;
}

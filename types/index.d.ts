declare module 'humanity' {
  export interface BasePrototype {
    type: string
    name: string
  }

  export interface EntityPrototype extends BasePrototype {
    id: string
  }

  export interface ItemIngredientPrototype extends BasePrototype {
    type: 'item'
    amount: number
  }

  export interface FluidIngredientPrototype extends BasePrototype {
    type: 'fluid'
    amount: number
  }

  export type IngredientPrototype =
    | ItemIngredientPrototype
    | FluidIngredientPrototype

  export interface ItemProductPrototype extends BasePrototype {
    type: 'item'
    amount: number
  }

  export interface FluidProductPrototype extends BasePrototype {
    type: 'fluid'
    amount: number
  }

  export type ProductPrototype = ItemProductPrototype | FluidProductPrototype

  export interface RecipePrototype extends BasePrototype {
    type: 'recipe'
    category?: string
    total_cost?: number
    ingredients?: readonly IngredientPrototype[]
    results?: readonly ProductPrototype[]
    enabled?: boolean
  }

  export interface ResourceProtoType extends BasePrototype {
    type: 'resource'
    name: 'forest' | 'rock mine' | 'iron mine' | 'copper mine' | 'coal mine'
    amount: number
    area_size: number
  }

  export interface BlockEntityPrototype extends EntityPrototype {
    type: 'block'
    resources: Partial<Record<ResourceProtoType['name'], number>>
    enabled: boolean
    area_size: number
  }

  export interface CharacterEntityPrototype extends EntityPrototype {
    type: 'character'
    /** 产能 */
    capacity: number
    task_id: string
  }

  export interface HouseEntityPrototype extends EntityPrototype {
    type: 'house'
    /** 容纳人数 */
    max_capacity: number
    workers: Pick<CharacterEntityPrototype, 'id'>[]
  }

  export interface FactoryEntityPrototype extends EntityPrototype {
    type: 'factory'
  }

  export type BuildingPrototype = HouseEntityPrototype | FactoryEntityPrototype

  export interface WorkstationEntityPrototype extends EntityPrototype {
    type: 'workstation'
    qty: number
    outputs: any[]
  }

  export interface TaskEntityPrototype extends EntityPrototype {
    type: 'task'
    status: TaskStatus
  }

  export type TaskStatus = 'idle' | 'in progress' | 'done'
}

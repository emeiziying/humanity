import products from '@/const/recipes/products'
import resources from '@/const/recipes/resources'
import workstations from '@/const/recipes/workstations'
import type { RecipePrototype } from 'humanity'

const recipes: RecipePrototype[] = [...resources, ...products, ...workstations]

export default recipes

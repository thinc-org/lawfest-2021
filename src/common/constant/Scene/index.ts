import { SHOP_SCENE } from './Shop'
import { RAIN_SCENE } from './Rain'
import { MOTORCYCLE_SCENE } from './Motorcycle'
import { AGE_DIALOGUE } from './AgeDialogue'

export type { IScene } from './types'
export const SCENE = {
  ...SHOP_SCENE,
  ...RAIN_SCENE,
  ...AGE_DIALOGUE,
  ...MOTORCYCLE_SCENE,
}

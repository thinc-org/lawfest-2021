import { MAIN_SCENE } from './MainScene'
import { AGE_DIALOGUE } from './AgeDialogue'

export type { IScene } from './types'
export const SCENE = {
  ...MAIN_SCENE,
  ...AGE_DIALOGUE,
}

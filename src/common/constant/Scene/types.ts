import { IChoice } from 'pages/game/components/Template/Choice/types'
import { IDialogueData } from 'pages/game/components/Template/Dialogue/types'

export type SceneType =
  | 'intro'
  | 'input'
  | 'image-click'
  | 'slider'
  | 'choice'
  | 'dialog'
  | 'standby'
  | 'delay'
  | 'result'
  | 'credit'

export interface IScene {
  type: SceneType
  bgType: 'color' | 'image'
  isStoredData: boolean
  nextScene: string
  bgColor?: number
  placeholder?: string
  bgImageSrc?: string
  dataKey?: string
  dialog?: IDialogueData[]
  question?: string
  choices?: IChoice[]
  forceFade?: boolean
  delay?: number
  text?: string
  img?: string
  alt?: string
  textColor?: string
}

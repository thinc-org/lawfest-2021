import { IChoice } from 'pages/game/components/Template/Choice/types'
import { IDialogueData } from 'pages/game/components/Template/Dialogue/types'

type SceneType =
  | 'intro'
  | 'input'
  | 'image-click'
  | 'slider'
  | 'choice'
  | 'dialog'
  | 'standby'
  | 'delay'

export interface IScene {
  type: SceneType
  bgType: 'color' | 'image'
  isStoredData: boolean
  nextScene: string
  bgColor?: string
  placeholder?: string
  bgImageSrc?: string
  dataKey?: string
  dialog?: IDialogueData[]
  question?: string
  choices?: IChoice[]
  forceFade?: boolean
  delay?: number
}

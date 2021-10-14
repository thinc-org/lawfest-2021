import { IChoice } from 'pages/game/components/Template/Choice/types'
import { IDialogueData } from 'pages/game/components/Template/Dialogue/types'

export interface IScene {
  type: string
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
}

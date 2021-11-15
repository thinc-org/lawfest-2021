import { ICallbackData } from '../../Scene/types'

export interface IDialogueData {
  text: string
  name: string
  variant: 'primary' | 'secondary'
}
export interface IDialogueTemplate {
  onFinish(val: ICallbackData): void
  dialogues: IDialogueData[]
}

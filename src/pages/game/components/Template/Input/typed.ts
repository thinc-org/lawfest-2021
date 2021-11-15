import { ICallbackData } from '../../Scene/types'

export interface IInputQuestion {
  nextScene: string
  question: string
  placeholder?: string
  onSubmit(val: ICallbackData): void
}

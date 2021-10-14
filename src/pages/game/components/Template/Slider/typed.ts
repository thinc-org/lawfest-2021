import { ICallbackData } from '../../Scene/types'

export interface ISliderQuestion {
  question: string
  onSubmit(val: ICallbackData): void
}

import { ICallbackData } from '../../Scene/types'

export interface IChoice {
  text: string
  nextScene: string
  value: string
}

export interface IChoiceTemplate {
  question: string
  choices: IChoice[]
  handleSubmit(val: ICallbackData): void
}

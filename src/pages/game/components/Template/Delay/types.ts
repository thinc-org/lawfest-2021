import { ICallbackData } from '../../Scene/types'

export interface IDelayTransitionProps {
  delay: number
  onFinish(val: ICallbackData): void
  text?: string
  img?: string
  alt?: string
  textColor?: string
}

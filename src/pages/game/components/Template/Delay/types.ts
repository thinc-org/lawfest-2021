import { ICallbackData } from '../../Scene/types'

export interface IDelayTransitionProps {
  delay: number
  onFinish(val: ICallbackData): void
}

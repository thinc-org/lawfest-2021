export interface IInputQuestion {
  nextScene: string
  question: string
  placeholder?: string
  onSubmit: (...args: any) => void
}

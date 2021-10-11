export interface IInputQuestion {
  question: string
  placeholder?: string
  onSubmit: (...args: any) => void
}

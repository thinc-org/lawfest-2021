export interface IDialogueData {
  text: string
  name: string
  variant: 'primary' | 'secondary'
}
export interface IDialogueTemplate {
  onFinish: (...args: any[]) => void
  dialogues: IDialogueData[]
}

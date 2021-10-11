export interface IChoice {
  text: string
  nextScene: string
  onClick: (...args: any) => void
}

export interface IChoiceTemplate {
  question: string
  choices: IChoice[]
}

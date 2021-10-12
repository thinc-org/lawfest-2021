export interface IMainController {
  name: string
  age: number
  nowScene: string
  hopeValue: number
  handleSetName: (x: string) => void
  handleSetHope: (x: number) => void
  handleSetAge: (x: number) => void
  handleSetNowScene: (x: string) => void
}

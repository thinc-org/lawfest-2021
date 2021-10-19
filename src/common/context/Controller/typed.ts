export interface IMainController {
  store: {
    [x: string]: any
  }
  nowScene: string
  handleSetStorage: (key: string, val: void) => void
  handleSetNowScene: (x: string) => void
  parsingData: (x: string) => string
}

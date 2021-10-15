import React, { useCallback, useState } from 'react'
import { IMainController } from './typed'

const MainControllerContext = React.createContext<IMainController>({
  store: {},
  nowScene: '',
  handleSetStorage: (key: string, value: any) => {},
  handleSetNowScene: () => {},
})

export function MainControllerProvider(props: React.PropsWithChildren<{}>) {
  const [store, setStore] = useState<{ [x: string]: any }>({})
  const [nowScene, setNowScene] = useState<string>('name-input')

  const handleSetStorage = useCallback(
    (key: string, value: any) => {
      setStore({ ...store, [key]: value })
    },
    [store]
  )

  const handleSetNowScene = useCallback((scene: string) => {
    setNowScene(scene)
  }, [])

  const value = {
    store,
    nowScene,
    handleSetStorage,
    handleSetNowScene,
  }

  return (
    <MainControllerContext.Provider value={{ ...value }}>
      {props.children}
    </MainControllerContext.Provider>
  )
}

export const useMainController = () => {
  return React.useContext(MainControllerContext)
}

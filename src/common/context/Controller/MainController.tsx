import React, { useCallback, useEffect, useState } from 'react'
import { IMainController } from './typed'

const MainControllerContext = React.createContext<IMainController>({
  store: {},
  nowScene: '',
  handleSetStorage: (key: string, value: any) => {},
  handleSetNowScene: () => {},
  parsingData: (x: string) => '',
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

  const parsingData = useCallback(
    (template: string) => {
      if (!store['name']) return template
      const replaceText = template.replace('$name', store['name'])

      return replaceText || template
    },
    [store]
  )

  useEffect(() => {
    if (!store.hope || !store.age) return

    // Randomize last scene logic
    console.log(store.hope, store.age)
  }, [store.hope, store.age])

  const value = {
    store,
    nowScene,
    handleSetStorage,
    handleSetNowScene,
    parsingData,
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

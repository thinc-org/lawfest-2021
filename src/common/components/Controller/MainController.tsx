import React, { useCallback, useState } from 'react'
import { IMainController } from './typed'

const MainControllerContext = React.createContext<IMainController>({
  age: 0,
  hopeValue: 0,
  name: '',
  nowScene: '',
  handleSetAge: () => {},
  handleSetHope: () => {},
  handleSetNowScene: () => {},
  handleSetName: () => {},
})

export function MainControllerProvider(props: React.PropsWithChildren<{}>) {
  const [name, setName] = useState<string>('')
  const [hopeValue, setHopeValue] = useState<number>(0)
  const [age, setAge] = useState<number>(0)

  const [nowScene, setNowScene] = useState<string>('intro')

  const handleSetName = useCallback((name: string) => {
    setName(name)
  }, [])

  const handleSetHope = useCallback((hope: number) => {
    setHopeValue(hope)
  }, [])

  const handleSetAge = useCallback((age: number) => {
    setAge(age)
  }, [])

  const handleSetNowScene = useCallback((scene: string) => {
    setNowScene(scene)
  }, [])

  const value = {
    name,
    age,
    nowScene,
    hopeValue,
    handleSetName,
    handleSetHope,
    handleSetAge,
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

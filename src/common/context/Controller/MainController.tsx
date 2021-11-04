import { ResultKey, RESULT_MAP } from 'common/constant/Scene/ResultMap'
import React, { useCallback, useState } from 'react'
import { IMainController } from './typed'

const MainControllerContext = React.createContext<IMainController>({
  store: {},
  nowScene: '',
  handleSetStorage: (key: string, value: any) => {},
  handleSetNowScene: () => {},
  parsingData: (x: string) => '',
  getBgFilePath: () => ({ bgLink: '', downloadLink: '', fileName: '' }),
})

export function MainControllerProvider(props: React.PropsWithChildren<{}>) {
  const [store, setStore] = useState<{ [x: string]: any }>({})
  const [nowScene, setNowScene] = useState<string>('before-raining-stop')

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

  const getBgFilePath = useCallback(() => {
    console.log(store)
    if (typeof store['age'] === 'undefined')
      throw new Error('Age is not defined yet')
    if (typeof store['hope'] === 'undefined')
      throw new Error('Hope is not defined yet')

    const hopeValue: number = store['hope']
    const ageRange: ResultKey = store['age']

    let hopeName: string

    if (hopeValue <= 35) {
      hopeName = 'low'
    } else if (hopeValue <= 69) {
      hopeName = 'medium'
    } else {
      hopeName = 'high'
    }

    const idx = Math.floor(Math.random() * 2)

    const imgLink = RESULT_MAP[ageRange][idx]

    return {
      bgLink: `images/results/bg/${hopeName}/${imgLink}`,
      downloadLink: `images/results/download/${hopeName}/${imgLink}`,
      fileName: `result-${hopeName}-${imgLink}`,
    }
  }, [store])

  const value = {
    store,
    nowScene,
    handleSetStorage,
    handleSetNowScene,
    parsingData,
    getBgFilePath,
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

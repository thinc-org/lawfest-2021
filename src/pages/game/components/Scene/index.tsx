import { useMainController } from 'common/context/Controller/MainController'
import React, { useCallback, useEffect, useState } from 'react'
import ChoiceTemplate from '../Template/Choice'
import DialogueTemplate from '../Template/Dialogue'
import InputTemplate from '../Template/Input'
import SliderTemplate from '../Template/Slider'
import { IScene, SCENE_LIST } from 'common/constant/Scene'
import { FadeOut, SceneContainer, SceneRootContainer } from './styled'
import { ICallbackData } from './types'

function SceneController() {
  const { nowScene, handleSetNowScene, handleSetStorage } = useMainController()
  const [sceneData, setSceneData] = useState<IScene>({
    type: 'dummy',
    bgType: 'color',
    isStoredData: false,
    nextScene: 'next',
  })

  const [newScene, setNewScene] = useState<string>('')
  const [mode, setMode] = useState<'in' | 'out' | 'none'>('in')
  const [preventClick, setPreventClick] = useState<boolean>(false)

  const handleSubmit = useCallback(
    (val: ICallbackData) => {
      if (sceneData.isStoredData && sceneData.dataKey) {
        handleSetStorage(sceneData.dataKey, val.storeValue)
      }

      const nextScene = val.nextSceneOverride || sceneData.nextScene
      handleSetNowScene(nextScene)
      if (sceneData.type !== SCENE_LIST[nextScene].type) {
        setMode('out')
        setPreventClick(true)
      } else {
        setSceneData(SCENE_LIST[nextScene])
      }
    },
    [
      handleSetNowScene,
      handleSetStorage,
      sceneData.dataKey,
      sceneData.isStoredData,
      sceneData.nextScene,
      sceneData.type,
    ]
  )

  useEffect(() => {
    if (!Object.keys(SCENE_LIST).includes(nowScene)) {
      throw new Error('Not found scene')
    }
    if (sceneData.type === 'dummy') {
      setSceneData(SCENE_LIST[nowScene])
    }
    setNewScene(nowScene)
  }, [newScene, nowScene, sceneData.type])

  return (
    <SceneRootContainer>
      <SceneContainer
        css={{
          opacity: 0,
          display: !preventClick ? 'none' : 'block',
          zIndex: 99,
        }}
      ></SceneContainer>
      <SceneContainer
        fade={mode}
        onAnimationEnd={(el) => {
          const animName = el.animationName
          if (animName === FadeOut.name) {
            setSceneData(SCENE_LIST[nowScene])
            setMode('in')
            setPreventClick(false)
          }
        }}
      >
        {sceneData.type === 'input' && (
          <InputTemplate
            onSubmit={handleSubmit}
            question={sceneData.question!}
            placeholder={sceneData.placeholder || ''}
            nextScene={sceneData.nextScene}
          ></InputTemplate>
        )}
        {sceneData.type === 'dialog' && (
          <DialogueTemplate
            dialogues={sceneData.dialog!}
            onFinish={handleSubmit}
          ></DialogueTemplate>
        )}
        {sceneData.type === 'choice' && (
          <ChoiceTemplate
            choices={sceneData.choices!}
            question={sceneData.question!}
            handleSubmit={handleSubmit}
          ></ChoiceTemplate>
        )}
        {sceneData.type === 'slider' && (
          <SliderTemplate
            question={sceneData.question || ''}
            onSubmit={handleSubmit}
          ></SliderTemplate>
        )}
      </SceneContainer>
    </SceneRootContainer>
  )
}

export default SceneController

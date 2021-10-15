import { useMainController } from 'common/context/Controller/MainController'
import React, { useCallback, useEffect, useState } from 'react'
import ChoiceTemplate from '../Template/Choice'
import DialogueTemplate from '../Template/Dialogue'
import InputTemplate from '../Template/Input'
import SliderTemplate from '../Template/Slider'
import { IScene, SCENE } from 'common/constant/Scene'
import { FadeIn, FadeOut, SceneContainer, SceneRootContainer } from './styled'
import { ICallbackData } from './types'
import ClickToContinueTemplate from '../Template/ClickToContinue'
import DelayTransition from '../Template/Delay'

function SceneController() {
  const { nowScene, handleSetNowScene, handleSetStorage } = useMainController()
  const [sceneData, setSceneData] = useState<IScene>({
    type: 'standby',
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
      if (sceneData.type !== SCENE[nextScene].type || sceneData.forceFade) {
        setMode('out')
        setPreventClick(true)
      } else {
        setSceneData(SCENE[nextScene])
      }
    },
    [
      handleSetNowScene,
      handleSetStorage,
      sceneData.dataKey,
      sceneData.forceFade,
      sceneData.isStoredData,
      sceneData.nextScene,
      sceneData.type,
    ]
  )

  useEffect(() => {
    if (!Object.keys(SCENE).includes(nowScene)) {
      throw new Error('Not found scene')
    }
    if (sceneData.type === 'standby') {
      setSceneData(SCENE[nowScene])
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
            setSceneData(SCENE[nowScene])
            setMode('in')
          }
          if (animName === FadeIn.name) {
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
        {sceneData.type === 'image-click' && (
          <ClickToContinueTemplate onSubmit={handleSubmit} />
        )}
        {sceneData.type === 'delay' && (
          <DelayTransition
            delay={sceneData.delay || 500}
            onFinish={handleSubmit}
            text={sceneData.text}
          />
        )}
      </SceneContainer>
    </SceneRootContainer>
  )
}

export default SceneController

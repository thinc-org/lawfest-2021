import { useMainController } from 'common/context/Controller/MainController'
import React, { useCallback, useEffect, useState } from 'react'
import ChoiceTemplate from '../Template/Choice'
import DialogueTemplate from '../Template/Dialogue'
import InputTemplate from '../Template/Input'
import SliderTemplate from '../Template/Slider'
import { IScene, SCENE } from 'common/constant/Scene'
import { FadeOut, SceneContainer, SceneRootContainer } from './styled'
import { ICallbackData } from './types'
import ClickToContinueTemplate from '../Template/ClickToContinue'
import DelayTransition from '../Template/Delay'
import ResultTemplate from '../Template/Result'
import Topbar from './Topbar'
import Credit from '../Template/Credit'

function SceneController() {
  const { nowScene, handleSetNowScene, handleSetStorage, getBgFilePath } =
    useMainController()
  const [sceneData, setSceneData] = useState<IScene>({
    type: 'standby',
    bgType: 'color',
    isStoredData: false,
    nextScene: 'next',
  })

  const [mode, setMode] = useState<'in' | 'out' | 'none'>('none')
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

    if (nowScene === 'before-name-input') {
      setMode('in')
      setSceneData(SCENE[nowScene])
    }
  }, [nowScene, sceneData.type])

  useEffect(() => {
    if (nowScene === 'epilogue-1') {
      getBgFilePath()
    }
  }, [getBgFilePath, nowScene])

  return (
    <SceneRootContainer>
      <SceneContainer
        css={{
          opacity: 0,
          display: !preventClick ? 'none' : 'block',
          zIndex: 98,
        }}
      ></SceneContainer>
      <Topbar sceneType={sceneData.type} />
      <SceneContainer
        fade={mode}
        onAnimationEnd={(el) => {
          const animName = el.animationName
          if (animName === FadeOut.name) {
            setSceneData(SCENE[nowScene])
            setMode('in')
            setPreventClick(false)
          }
        }}
      >
        {sceneData.type === 'credit' && <Credit onFinish={handleSubmit} />}
        {sceneData.type === 'input' && (
          <InputTemplate
            onSubmit={handleSubmit}
            question={sceneData.question!}
            placeholder={sceneData.placeholder || ''}
            nextScene={sceneData.nextScene}
          />
        )}
        {sceneData.type === 'dialog' && (
          <DialogueTemplate
            dialogues={sceneData.dialog!}
            onFinish={handleSubmit}
          />
        )}
        {sceneData.type === 'choice' && (
          <ChoiceTemplate
            choices={sceneData.choices!}
            question={sceneData.question!}
            handleSubmit={handleSubmit}
          />
        )}
        {sceneData.type === 'slider' && (
          <SliderTemplate
            question={sceneData.question || ''}
            onSubmit={handleSubmit}
          />
        )}
        {sceneData.type === 'image-click' && (
          <ClickToContinueTemplate onSubmit={handleSubmit} />
        )}
        {sceneData.type === 'delay' && (
          <DelayTransition
            img={sceneData.img}
            alt={sceneData.alt}
            delay={sceneData.delay || 500}
            onFinish={handleSubmit}
            text={sceneData.text}
            textColor={sceneData.textColor}
          />
        )}
        {sceneData.type === 'result' && <ResultTemplate />}
      </SceneContainer>
    </SceneRootContainer>
  )
}

export default SceneController

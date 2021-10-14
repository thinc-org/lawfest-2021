import { useMainController } from 'common/context/Controller/MainController'
import React, { useEffect, useState } from 'react'
import ChoiceTemplate from '../Template/Choice'
import DialogueTemplate from '../Template/Dialogue'
import InputTemplate from '../Template/Input'
import SliderTemplate from '../Template/Slider'
import { IScene, SCENE_LIST } from 'common/constant/Scene'

function SceneController() {
  const { nowScene } = useMainController()
  const [sceneData, setSceneData] = useState<IScene>({
    type: 'input',
    bgType: 'color',
    isStoredData: false,
    nextScene: 'next',
  })

  const [newScene, setNewScene] = useState<string>('')
  const [isFade, setFade] = useState<boolean>(true)

  useEffect(() => {
    if (!Object.keys(SCENE_LIST).includes(nowScene)) {
      throw new Error('Not found scene')
    }
    setNewScene(newScene)
    setSceneData(SCENE_LIST[nowScene])
  }, [newScene, nowScene])

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      >
        {sceneData.type === 'input' && (
          <InputTemplate
            onSubmit={sceneData.onSubmit!}
            question={sceneData.question!}
            placeholder={sceneData.placeholder || ''}
            nextScene={sceneData.nextScene}
          ></InputTemplate>
        )}
        {sceneData.type === 'dialog' && (
          <DialogueTemplate
            dialogues={sceneData.dialog!}
            onFinish={sceneData.onSubmit!}
          ></DialogueTemplate>
        )}
        {sceneData.type === 'choice' && (
          <ChoiceTemplate
            choices={sceneData.choices!}
            question={sceneData.question!}
          ></ChoiceTemplate>
        )}
        {sceneData.type === 'slider' && (
          <SliderTemplate
            question={sceneData.question || ''}
            onSubmit={sceneData.onSubmit!}
          ></SliderTemplate>
        )}
      </div>
    </div>
  )
}

export default SceneController

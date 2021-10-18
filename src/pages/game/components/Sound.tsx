import React, { useEffect } from 'react'
import { sound } from '@pixi/sound'
import { Loader } from 'pixi.js'
import { useMainController } from 'common/context/Controller/MainController'

function SoundController() {
  const { nowScene } = useMainController()

  useEffect(() => {
    Loader.shared.onComplete.add(() => {
      if (nowScene === 'name-input') {
        sound.play('bg')
      }
    })
    if (Loader.shared.progress === 100) {
    }
  }, [nowScene])

  return <></>
}

export default SoundController

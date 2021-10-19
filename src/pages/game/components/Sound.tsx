import React, { useEffect } from 'react'
import { sound } from '@pixi/sound'
import { Loader } from 'pixi.js'
import { useMainController } from 'common/context/Controller/MainController'

function SoundController() {
  const { nowScene } = useMainController()

  useEffect(() => {
    Loader.shared.onComplete.add(() => {
      if (nowScene === 'name-input') {
        sound.play('bg', { loop: true })
      }
    })
  }, [nowScene])

  useEffect(() => {
    return () => {
      sound.stopAll()
    }
  }, [])

  return <></>
}

export default SoundController

import React, { useEffect } from 'react'
import { sound } from '@pixi/sound'
import { Loader } from 'pixi.js'
import { useMainController } from 'common/context/Controller/MainController'

function SoundController() {
  const { nowScene } = useMainController()

  useEffect(() => {
    if (nowScene === 'name-input') {
      if (!Loader.shared.loading) sound.play('bg', { loop: true })
    }
  }, [nowScene])

  useEffect(() => {
    return () => {
      sound.stopAll()
    }
  }, [])

  return <></>
}

export default SoundController

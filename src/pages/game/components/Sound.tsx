import React, { useEffect, useState } from 'react'
import { Loader } from 'pixi.js'
import { sound } from '@pixi/sound'
import { useMainController } from 'common/context/Controller/MainController'

function SoundController() {
  const [nowPlaying, setNowPlaying] = useState<string>('')
  const { nowScene } = useMainController()

  useEffect(() => {
    console.log(nowScene)
    return
    if (nowPlaying === '' && nowPlaying !== nowScene) {
      sound.play(nowScene)
    }
  }, [nowScene, nowPlaying])

  return <></>
}

export default SoundController

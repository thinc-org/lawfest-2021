import {
  MainControllerProvider,
  useMainController,
} from 'common/context/Controller/MainController'
import { styled } from 'common/config'
import SceneController from 'pages/game/components/Scene'
import { SCENE } from 'common/constant/Scene'
import SoundController from 'pages/game/components/Sound'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Application, Loader, Container } from 'pixi.js'
import { RESOURCES } from 'common/constant/Scene/Resources'
import { StyledText } from 'common/components/Typography'
import { SceneEngine } from './components/SceneEngine'
import { BaseSprite, FadeSprite, ZoomSprite } from './components/Sprite'

const RootContainer = styled('div', {
  width: '100vw',
  minHeight: '100vh',
  height: '100%',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: '$black950',
})

const GameContainer = styled('div', {
  display: 'flex',
  maxWidth: '496px',
  width: '100%',
  height: '100vh',
  maxHeight: '896px',
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  transition: 'all 3s ease-in-out',
  '@sm': {
    width: '100vw',
    maxHeight: '100vh',
  },
})

interface ISprite {
  name: string
  sprite: BaseSprite
}

function PixiTesting() {
  const { nowScene } = useMainController()
  const [isLoading, setLoading] = useState<boolean>(true)
  const [progress, setProgress] = useState<number>(0)
  const containerRef = useRef<HTMLDivElement | null>()
  const ImageContainer = useMemo(() => new Container(), [])

  const app = useMemo(
    () =>
      new Application({
        width: 414,
        height: 896,
        antialias: true,
        autoDensity: true,
        backgroundColor: 0xffffff,
        resolution: window.devicePixelRatio || 1,
      }),
    []
  )

  const Engine = useMemo(() => new SceneEngine(app), [app])

  const ref = useRef<HTMLDivElement | null>()

  // Loading assets
  useEffect(() => {
    const loader = Loader.shared

    for (const { name, src } of RESOURCES.sprite) {
      const embedSrc = `images/${src}`
      if (src && !loader.resources[name]) {
        loader.add(name, embedSrc)
      }
    }

    for (const { name, src } of RESOURCES.sound) {
      const embedSrc = `sounds/${src}`
      if (src && !loader.resources[name]) {
        loader.add(name, embedSrc)
      }
    }

    loader.onProgress.add((_loader) => {
      setProgress(Math.round(_loader.progress))
    })

    loader.onComplete.add(() => {
      setLoading(false)
    })

    loader.load((_loader, _resource) => {
      const spritesSet: ISprite[] = []
      for (const { name } of RESOURCES.sprite) {
        const texture = _resource[name].texture
        if (!texture) continue
        let sprite: BaseSprite
        if (name === 'map') {
          sprite = new ZoomSprite(texture, texture.width, texture.height)
        } else {
          sprite = new FadeSprite(texture, texture.width, texture.height)
        }

        spritesSet.push({
          name,
          sprite,
        })
      }
      Engine.appendSceneList(spritesSet)
    })
  }, [Engine])

  useEffect(() => {
    ref.current?.appendChild(app.view)

    const resizer = new ResizeObserver(() => {
      if (app.renderer) {
        app.resize()
        app.render()
      }
    })

    if (containerRef.current) {
      resizer.observe(containerRef.current)
      app.resizeTo = containerRef.current
    }

    app.ticker.add((delta) => {
      Engine.update(delta)
    })

    return () => {
      resizer.disconnect()
      app.destroy()
    }
  }, [Engine, ImageContainer, app])

  useEffect(() => {
    Engine.sceneSwitcher({
      type: SCENE[nowScene].bgType,
      bgImg: SCENE[nowScene].bgImageSrc,
      bgColor: SCENE[nowScene].bgColor,
    })
  }, [Engine, nowScene])

  return (
    <RootContainer>
      <GameContainer
        css={{ backgroundColor: 'white' }}
        ref={(el) => {
          containerRef.current = el
        }}
      >
        {isLoading ? (
          <>
            <StyledText mobileVariant="title3" css={{ zIndex: 1 }}>
              Loading... {progress}%
            </StyledText>
          </>
        ) : (
          <>
            <SceneController />
          </>
        )}
        <div
          ref={(el) => {
            ref.current = el
          }}
          style={{
            position: 'absolute',
            display: isLoading ? 'none' : 'block',
            height: '100%',
            zIndex: 0,
          }}
        ></div>
      </GameContainer>
      <SoundController />
    </RootContainer>
  )
}

function Wrapper() {
  return (
    <MainControllerProvider>
      <PixiTesting />
    </MainControllerProvider>
  )
}

export default Wrapper

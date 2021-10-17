import {
  MainControllerProvider,
  useMainController,
} from 'common/context/Controller/MainController'
import { styled } from 'common/config'
import SceneController from 'pages/game/components/Scene'
import { SCENE } from 'common/constant/Scene'
import SoundController from 'pages/game/components/Sound'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Application, Loader, Sprite, Container, Graphics } from 'pixi.js'
import { RESOURCES } from 'common/constant/Scene/Resources'
import { StyledText } from 'common/components/Typography'

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
  transition: 'all 2s ease-in-out',
  '@sm': {
    width: '100vw',
    maxHeight: '100vh',
  },
})

interface ISprite {
  name: string
  sprite: Sprite
}

function PixiTesting() {
  const { nowScene } = useMainController()
  const [isLoading, setLoading] = useState<boolean>(true)
  const [progress, setProgress] = useState<number>(0)
  const [sprites, setSprites] = useState<ISprite[]>([])
  const containerRef = useRef<HTMLDivElement | null>()
  const ImageContainer = useMemo(() => new Container(), [])

  const app = useMemo(
    () =>
      new Application({
        width: 414,
        height: 800,
        antialias: true,
        autoDensity: true,
        backgroundColor: 0xabcd,
        resolution: window.devicePixelRatio || 1,
      }),
    []
  )

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

    for (const src of RESOURCES.sound) {
      const embedSrc = `sounds/${src}`
      if (src && !loader.resources[embedSrc]) {
        loader.add(embedSrc)
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
        const sprite = new Sprite(_resource[name].texture)

        const scaleX = containerRef.current?.clientWidth! / sprite.width
        const scaleY = containerRef.current?.clientHeight! / sprite.height

        sprite.scale.set(Math.max(scaleX, scaleY), Math.max(scaleX, scaleY))
        spritesSet.push({
          name,
          sprite,
        })
      }
      setSprites(spritesSet)
    })
  }, [])

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

    app.ticker.add(() => {
      const { width, height } = app.screen

      ImageContainer.x = width / 2
      ImageContainer.y = height / 2
      ImageContainer.pivot.x = ImageContainer.width / 2
      ImageContainer.pivot.y = ImageContainer.height / 2
    })

    app.stage.addChild(ImageContainer)

    return () => {
      resizer.disconnect()
    }
  }, [ImageContainer, app])

  useEffect(() => {
    if (sprites.length === 0) return

    ImageContainer.addChild(sprites[2].sprite)
  }, [ImageContainer, sprites])

  const handleSwitchScene = () => {}

  useEffect(() => {}, [nowScene])

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

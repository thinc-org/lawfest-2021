import {
  MainControllerProvider,
  useMainController,
} from 'common/context/Controller/MainController'
import { styled } from 'common/config'
import SceneController from 'pages/game/components/Scene'
import { SCENE } from 'common/constant/Scene'
import SoundController from 'pages/game/components/Sound'
import { useEffect, useMemo, useRef } from 'react'
import { Application } from 'pixi.js'

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
  transition: 'all 1s ease-in',
  '@sm': {
    width: '100vw',
    maxHeight: '100vh',
  },
})

// const Image = styled('img', {
//   transition: 'opacity 1s ease-in, filter 2s ease-out',
//   width: '100%',
//   height: '100%',
//   position: 'absolute',
//   objectFit: 'cover',
//   zIndex: -99,
//   variants: {
//     show: {
//       true: {
//         opacity: 1,
//       },
//       false: {
//         opacity: 0,
//       },
//     },
//     isBlur: {
//       true: {
//         filter: 'blur(15px)',
//       },
//       false: {
//         filter: 'blur(0px)',
//       },
//     },
//   },

//   defaultVariants: {
//     show: true,
//   },
// })

function PixiTesting() {
  const { nowScene } = useMainController()
  const containerRef = useRef<HTMLDivElement | null>()

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

    return () => {
      resizer.disconnect()
    }
  }, [app])

  return (
    <RootContainer>
      <GameContainer
        ref={(el) => {
          containerRef.current = el
        }}
      >
        <SceneController />
      </GameContainer>
      <div
        ref={(el) => {
          ref.current = el
        }}
        style={{
          position: 'absolute',
          height: '100%',
          zIndex: 0,
        }}
      ></div>
    </RootContainer>
  )
}

function Wrapper() {
  return (
    <MainControllerProvider>
      <SoundController />
      <PixiTesting />
    </MainControllerProvider>
  )
}

export default Wrapper

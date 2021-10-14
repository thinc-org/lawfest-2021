import {
  MainControllerProvider,
  useMainController,
} from 'common/context/Controller/MainController'
import { styled } from 'common/config'
import SceneController from 'pages/game/components/Scene'
import { SCENE } from 'common/constant/Scene'

const RootContainer = styled('div', {
  width: '100vw',
  minHeight: '100vh',
  height: '100%',
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

  return (
    <RootContainer>
      <GameContainer css={{ backgroundColor: SCENE[nowScene].bgColor }}>
        <SceneController />
      </GameContainer>
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

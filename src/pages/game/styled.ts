import { styled } from 'common/config'
import Div100vh from 'react-div-100vh'

export const RootContainer = styled(Div100vh, {
  width: '100%',
  height: '100%',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: '$black950',
  userSelect: 'none',
})

export const GameContainer = styled('div', {
  display: 'flex',
  maxWidth: '414px',
  width: '100%',
  height: '100%',
  maxHeight: '833px',
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

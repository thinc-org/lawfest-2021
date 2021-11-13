import { styled, keyframes } from 'common/config/'

const KeyframeMain = keyframes({
  '0%': {
    transform: 'scale(0.1)',
    opacity: 0.2,
  },
  '80%': {
    opacity: 1,
  },
  '100%': {
    transform: 'scale(1)',
  },
})

const KeyframeBottomRight = keyframes({
  '0%': {
    transform: 'scale(0.25)',
    opacity: 1,
  },
  '80%': {
    opacity: 0.4,
  },
  '100%': {
    opacity: 0.4,
    transform: 'scale(1)',
  },
})

const KeyframeTopLeft = keyframes({
  '0%': {
    transform: 'scale(0.11)',
    opacity: 1,
  },
  '80%': {
    opacity: 0.8,
  },
  '100%': {
    opacity: 0.8,
    transform: 'scale(1)',
  },
})

const KeyframeBottomLeft = keyframes({
  '0%': {
    transform: 'scale(0.142)',
    opacity: 1,
  },
  '100%': {
    opacity: 0,
    transform: 'scale(1)',
  },
})

export const LogoContainer = styled('div', {
  position: 'absolute',
  height: '100%',
  width: '100%',
  zIndex: 99,
  transition: 'opacity 1s ease-in',
  variants: {
    show: {
      open: {
        opacity: 1,
      },
      close: {
        opacity: 0,
      },
    },
  },
})

export const LogoImage = styled('img', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transition: 'opacity 1s ease-in',
  zIndex: '99',
  width: '50%',
  variants: {
    show: {
      open: {
        transform: 'translate(-50%, -50%)',
        opacity: 1,
      },
      close: {
        transform: 'translate(-50%, -50%)',
        opacity: 0,
      },
    },
  },

  defaultVariants: {
    show: 'close',
  },
})

export const MainBlueInk = styled('img', {
  transformOrigin: 'center center',
  position: 'absolute',
  left: '2%',
  bottom: '1%',
  width: '100%',
  height: '100%',
  animation: `${KeyframeMain} 3s forwards`,
  '-webkit-animation': `${KeyframeMain} 3s forwards`,
})

export const BottomRightInk = styled('img', {
  transformOrigin: 'center center',
  position: 'absolute',
  top: '40%',
  left: '55%',
  width: '50%',
  height: '50%',
  transform: 'rotate(45deg)',
  '-webkit-animation': `${KeyframeBottomRight} 2s forwards`,
  animation: `${KeyframeBottomRight} 2s forwards`,
})

export const TopLeftInk = styled('img', {
  transformOrigin: 'center center',
  position: 'absolute',
  top: '5%',
  left: '-10%',
  width: '60%',
  height: '60%',
  '-webkit-animation': `${KeyframeTopLeft} 3s forwards`,
  animation: `${KeyframeTopLeft} 3s forwards`,
})

export const BottomLeftInk = styled('img', {
  transformOrigin: 'center center',
  position: 'absolute',
  top: '30%',
  left: '5%',
  width: '60%',
  height: '60%',
  '-webkit-animation': `${KeyframeBottomLeft} 3s forwards`,
  animation: `${KeyframeBottomLeft} 3s forwards`,
})

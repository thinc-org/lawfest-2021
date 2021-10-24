import { styled, keyframes } from 'common/config/'

const KeyframeMain = keyframes({
  '0%': {
    transform: 'scale(1)',
    opacity: 0.2,
  },
  '80%': {
    opacity: 1,
  },
  '100%': {
    transform: 'scale(9)',
  },
})

const KeyframeBottomRight = keyframes({
  '0%': {
    transform: 'scale(1)',
    opacity: 1,
  },
  '80%': {
    opacity: 0.4,
  },
  '100%': {
    opacity: 0.4,
    transform: 'scale(4)',
  },
})

const KeyframeTopLeft = keyframes({
  '0%': {
    transform: 'scale(1)',
    opacity: 1,
  },
  '80%': {
    opacity: 0.8,
  },
  '100%': {
    opacity: 0.8,
    transform: 'scale(11)',
  },
})

const KeyframeBottomLeft = keyframes({
  '0%': {
    transform: 'scale(1)',
    opacity: 1,
  },
  '100%': {
    opacity: 0,
    transform: 'scale(7)',
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
  width: '200px',
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
  height: 'auto',
  position: 'absolute',
  top: '46%',
  left: '46%',
  transform: 'translate(-46%, -46%)',
  '-webkit-animation': `${KeyframeMain} 3s forwards`,
  animation: `${KeyframeMain} 3s forwards`,
})

export const BottomRightInk = styled('img', {
  transformOrigin: 'center center',
  height: 'auto',
  position: 'absolute',
  bottom: '35%',
  right: '20%',
  transform: 'rotate(45deg)',
  '-webkit-animation': `${KeyframeBottomRight} 2s forwards`,
  animation: `${KeyframeBottomRight} 2s forwards`,
})

export const TopLeftInk = styled('img', {
  transformOrigin: 'center center',
  height: 'auto',
  position: 'absolute',
  top: '35%',
  left: '20%',
  '-webkit-animation': `${KeyframeTopLeft} 3s forwards`,
  animation: `${KeyframeTopLeft} 3s forwards`,
})

export const BottomLeftInk = styled('img', {
  transformOrigin: 'center center',
  height: 'auto',
  position: 'absolute',
  bottom: '40%',
  left: '30%',
  '-webkit-animation': `${KeyframeBottomLeft} 3s forwards`,
  animation: `${KeyframeBottomLeft} 3s forwards`,
})

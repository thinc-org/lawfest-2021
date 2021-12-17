import { styled } from 'common/config'

export const Container = styled('div', {
  position: 'relative',
  height: '100%',
  overflow: 'hidden',
  display: 'none',
  '@sm': {
    display: 'block',
  },
})

export const InkContainer = styled('div', {
  position: 'absolute',
  top: '27%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: '70%',
})

export const LawFestLogo = styled('img', {
  height: '25%',
  maxWidth: '80vw',
  position: 'absolute',

  left: '50%',
  transform: 'translate(-50%, -50%)',

  // Animation
  top: '31%',
  transition: 'top 3s',

  variants: {
    state: {
      before: {},
      after: {
        top: '-30%',
      },
    },
  },
})

export const StartButton = styled('div', {
  height: '13%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  userSelect: 'none',

  // Animation
  top: '87%',
  transition: 'opacity 1s',

  variants: {
    state: {
      before: {},
      after: {
        opacity: '0',
      },
    },
  },
})

export const AfterStateContainer = styled('div', {
  width: '100%',
  zIndex: 2,
  position: 'absolute',

  // Animation
  bottom: '-500px',
  transition: 'bottom 2s',

  variants: {
    state: {
      before: {},
      after: {
        bottom: 0,
      },
    },
  },
})

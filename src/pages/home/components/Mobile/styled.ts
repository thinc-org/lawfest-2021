import { styled } from 'common/config'

export const Container = styled('div', {
  position: 'relative',
  height: '100%',
  overflow: 'hidden',
})

export const InkContainer = styled('div', {
  position: 'absolute',
  top: '27%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
})

export const LawFestLogo = styled('img', {
  height: '33%',
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

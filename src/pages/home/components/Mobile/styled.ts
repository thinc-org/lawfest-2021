import { styled } from 'common/config'

export const Container = styled('div', {
  position: 'relative',
  height: '100%',
  overflow: 'hidden',
})

export const InkContainer = styled('div', {
  position: 'absolute',
  top: '27vh',
  left: '50%',
  transform: 'translate(-50%, -50%)',
})

export const LawFestLogo = styled('img', {
  height: '33vh',
  position: 'absolute',

  left: '50%',
  transform: 'translate(-50%, -50%)',

  // Animation
  top: '31vh',
  transition: 'top 3s',

  variants: {
    state: {
      before: {},
      after: {
        top: '-30vh',
      },
    },
  },
})

export const StartButton = styled('div', {
  height: '13vh',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',

  // Animation
  top: '87vh',
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
  bottom: '-50vh',
  transition: 'bottom 2s',

  variants: {
    state: {
      before: {},
      after: {
        bottom: '0',
      },
    },
  },
})

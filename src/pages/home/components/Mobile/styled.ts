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

export const LawFestLogoContainer = styled('img', {
  position: 'absolute',
  top: '31vh',
  height: '33vh',
  left: '50%',
  transform: 'translate(-50%, -50%)',
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

export const AfterStateContainer = styled('div', {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  transition: 'bottom 2s',
  bottom: '-50vh',
  width: '100%',
  zIndex: 2,
  variants: {
    state: {
      before: {},
      after: {
        bottom: '0',
      },
    },
  },
})
export const StartButton = styled('div', {
  height: '13vh',
  position: 'absolute',
  top: '87vh',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
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

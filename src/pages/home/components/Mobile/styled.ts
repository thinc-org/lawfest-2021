import { styled } from 'common/config'
import { MdKeyboardArrowDown } from 'react-icons/md'

export const Container = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  position: 'relative',
})

export const InkContainer = styled('div', {
  position: 'absolute',
  top: '27vh',
  left: '50%',
  transform: 'translate(-50%, -50%)',
})

export const LawFestLogoContainer = styled('div', {
  position: 'absolute',
  top: '31vh',
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

export const TextContainer = styled('div', {
  position: 'absolute',
  top: '70vh',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  transition: 'top 2s',
  variants: {
    state: {
      before: {},
      after: {
        top: '35vh',
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
  variants: {
    state: {
      before: {},
      after: {
        bottom: 0,
      },
    },
  },
})

export const StyledArrow = styled(MdKeyboardArrowDown, {
  position: 'absolute',
  bottom: '-20px',
  fill: 'white',
  fontSize: '10rem',
  transition: 'opacity 2s',
  variants: {
    state: {
      before: {},
      after: {
        opacity: 0,
      },
    },
  },
})

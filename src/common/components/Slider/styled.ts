import { styled } from 'common/config'

export const Container = styled('div', {
  position: 'relative',
  width: '80%',
  backgroundColor: 'white',
  padding: '2px 17px 0 15px',
  height: '28px',
  borderRadius: '15px',
})

// Thumb

export const StyledThumb = styled('div', {
  top: 0,
  backgroundColor: '#444C71',
  width: '26px',
  height: '26px',
  borderRadius: '20px',
  '&:focus': {
    outline: 'none',
  },
})

// Track

export const TrackContainer = styled('div', {
  position: 'relative',
})

export const StyledFilledTrack = styled('div', {
  background: 'linear-gradient(270deg, #FBC55C 0%, #505B89 100%)',
  height: '10px',
  position: 'absolute',
  top: '8px',
  width: '100%',
  borderRadius: '5px',
})

export const StyledTrack = styled('div', {
  height: '10px',
  top: '8px',
  bottom: '0',
  borderRadius: '5px',
  variants: {
    index: {
      '1': {
        background: '$primary50',
      },
    },
  },
})

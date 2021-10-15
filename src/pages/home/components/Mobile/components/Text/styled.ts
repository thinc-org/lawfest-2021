import { styled } from '@stitches/react'

export const TextContainer = styled('div', {
  position: 'absolute',
  height: '30%',
  top: '57%',
  left: '50%',
  transform: 'translate(-50%, 0)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  transition: 'top 2s',
  variants: {
    state: {
      before: {},
      after: {
        top: '22%',
      },
    },
  },
})

export const YouHopeIHope = styled('svg', {
  fill: 'black',
  transition: 'fill 2s',
  width: '75vw',
  variants: {
    state: {
      before: {},
      after: {
        fill: '#F1E1C7',
      },
    },
  },
})

export const IHopeYouHope = styled('svg', {
  transition: 'opacity 2s',
  width: '50vw',
  variants: {
    state: {
      before: {},
      after: {
        opacity: 0,
      },
    },
  },
})

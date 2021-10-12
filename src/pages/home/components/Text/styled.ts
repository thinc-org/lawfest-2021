import { styled } from '@stitches/react'

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
  variants: {
    state: {
      before: {},
      after: {
        opacity: 0,
      },
    },
  },
})

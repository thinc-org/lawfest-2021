import { styled, keyframes } from 'common/config'

export const FadeContainer = styled('div', {
  transition: 'opacity 800ms linear',
  variants: {
    show: {
      true: {
        opacity: 1,
        display: 'block',
      },
      false: {
        opacity: 0,
        display: 'none',
      },
    },
  },
  defaultVariants: {
    show: false,
  },
})

const ScrollKeyFrame = keyframes({
  '0%': {
    transform: 'translateY(0%)',
  },
  '100%': {
    transform: 'translateY(-250%)',
  },
})

export const ScrollContainer = styled('div', {
  position: 'absolute',
  height: '100%',
  display: 'grid',
  placeContent: 'center',
  variants: {
    start: {
      true: {
        animation: `${ScrollKeyFrame} 17s linear forwards`,
      },
      false: {},
    },
  },

  defaultVariants: {
    start: false,
  },
})
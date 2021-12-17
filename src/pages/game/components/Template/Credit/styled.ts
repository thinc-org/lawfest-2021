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
    transform: 'translateY(-300%)',
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
        animation: `${ScrollKeyFrame} 21s linear forwards`,
      },
      false: {},
    },
  },

  defaultVariants: {
    start: false,
  },
})

export const LogoImg = styled('img', {
  borderRadius: '8px',
  variants: {
    darkBg: {
      true: {
        backgroundColor: '$primary900',
      },
      false: {},
    },
  },

  defaultVariants: {
    darkBg: false,
  },
})

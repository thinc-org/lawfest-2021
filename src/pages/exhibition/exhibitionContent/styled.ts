import { styled, keyframes } from 'common/config'

export const StyledText = styled('div', {
  color: 'black',
  fontSize: '20px',
  fontWeight: 'bold',
  fontFamily: '$Mitr',
  textAlign: 'center',
  cursor: 'pointer',
  userSelect: 'none',
  '@sm': {
    fontSize: '16px',
    marginBottom: '17px',
  },
})

export const FadeIn = keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
})

export const FadeOut = keyframes({
  '0%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0,
  },
})

export const FadeContainer = styled('div', {
  width: '100%',
  height: '100%',
  variants: {
    fadeIn: {
      true: {
        animation: `${FadeIn} 1500ms ease-in-out`,
      },
      false: {
        animation: `${FadeOut} 1500ms ease-in-out`,
      },
    },
  },
  defaultVariants: {
    fadeIn: true,
  },
})

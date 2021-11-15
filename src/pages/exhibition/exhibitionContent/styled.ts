import { styled, keyframes } from 'common/config'

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
        animation: `${FadeIn} 600ms ease-in-out`,
      },
      false: {
        animation: `${FadeOut} 600ms ease-in-out`,
      },
    },
  },
  defaultVariants: {
    fadeIn: true,
  },
})

export const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '30px 40px 20px 40px',
  backgroundColor: '#f1e1c7',
  boxSizing: 'border-box',
  height: '100%',
})

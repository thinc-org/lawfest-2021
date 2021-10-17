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

export const SceneRootContainer = styled('div', {
  width: '100%',
  height: '100%',
  position: 'relative',
  zIndex: '99',
})

export const SceneContainer = styled('div', {
  position: 'absolute',
  width: '100%',
  height: '100%',
  variants: {
    fade: {
      in: {
        animation: `${FadeIn} 800ms ease-in-out`,
      },
      out: {
        animation: `${FadeOut} 800ms ease-in-out`,
      },
      none: {},
    },
  },
  defaultVariants: {
    fade: 'none',
  },
})

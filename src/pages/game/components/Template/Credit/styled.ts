import { styled } from 'common/config'

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

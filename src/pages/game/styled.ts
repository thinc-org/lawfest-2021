import { styled } from 'common/config/'

export const LogoContainer = styled('div', {
  position: 'relative',
  width: 'fit-content',
})

export const LogoImage = styled('img', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transition: 'all 2s ease-in',
  variants: {
    show: {
      open: {
        transform: 'translate(-50%, -50%) scale(1)',
      },
      close: {
        transform: 'translate(-50%, -50%) scale(0)',
      },
    },
  },

  defaultVariants: {
    show: 'close',
  },
})

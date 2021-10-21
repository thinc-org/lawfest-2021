import { styled } from 'common/config/'

export const LogoContainer = styled('div', {
  position: 'absolute',
  height: '100%',
  width: '100%',
  zIndex: 99,
  transition: 'opacity 1s ease-in',
  variants: {
    show: {
      open: {
        opacity: 1,
      },
      close: {
        opacity: 0,
      },
    },
  },
})

export const LogoImage = styled('img', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transition: 'opacity 1s ease-in',
  variants: {
    show: {
      open: {
        transform: 'translate(-50%, -50%)',
        opacity: 1,
      },
      close: {
        transform: 'translate(-50%, -50%)',
        opacity: 0,
      },
    },
  },

  defaultVariants: {
    show: 'close',
  },
})

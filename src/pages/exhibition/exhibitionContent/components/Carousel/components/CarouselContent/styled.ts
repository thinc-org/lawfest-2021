import { styled } from 'common/config'

export const Container = styled('div', {
  boxSizing: 'border-box',
  gap: '15px',
  padding: '10px 2px',
  width: '100%',
  variants: {
    imagePosition: {
      top: {
        display: 'flex',
        flexDirection: 'column',
      },
      left: {
        display: 'flex',
      },
    },
  },
  defaultVariants: {
    imagePosition: 'top',
  },
})

export const ArrowContainer = styled('div', {
  '&:disabled': {
    display: 'none',
  },
})

export const StyledImage = styled('img', {
  height: '100%',
  margin: 'auto',
  variants: {
    imagePosition: {
      top: {
        height: '225px',
        '@md': {
          width: '100%',
          height: 'auto',
        },
      },
      left: {
        height: '377px',
        width: '212px',
        '@md': {
          height: '260px',
          width: '146px',
        },
        '@sm': {
          height: 'auto',
          width: '40%',
        },
      },
    },
  },
})

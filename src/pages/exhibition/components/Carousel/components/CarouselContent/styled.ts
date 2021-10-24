import { styled } from 'common/config'

export const Container = styled('div', {
  gap: '15px',
  padding: '10px',
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

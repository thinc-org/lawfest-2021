import { styled } from 'common/config'

export const DialogueContainer = styled('div', {
  minHeight: '150px',
  width: 'calc(100% - 40px)',
  boxSizing: 'border-box',
  borderRadius: '10px',
  backgroundColor: '#FFF1D8B2',
  padding: '27px 16px 20px 20px',
  position: 'relative',
  cursor: 'pointer',
  userSelect: 'none',
})

export const NameContainer = styled('div', {
  color: 'white',
  minHeight: '20px',
  minWidth: '120px',
  maxWidth: 'calc(100% - 40px)',
  borderRadius: '10px',

  position: 'absolute',
  bottom: 'calc(100% - 10px)',
  left: '20px',

  textAlign: 'center',

  variants: {
    variant: {
      primary: {
        background: 'linear-gradient(180deg, #444C71 0%, #6572A6 100%)',
      },
      secondary: {
        background: 'linear-gradient(360deg, #FBC55C 0%, #CE894B 103.11%)',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

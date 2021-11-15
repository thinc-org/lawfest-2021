import { styled } from 'common/config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '50%',
  paddingBottom: '30px',
  '@xl': {
    width: '70%',
  },
  '@lg': {
    width: '80%',
  },
  '@sm': {
    width: '100%',
  },
})

export const CarouselContainer = styled('div', {
  display: 'block',
  width: '100%',
  marginTop: '16px',
})

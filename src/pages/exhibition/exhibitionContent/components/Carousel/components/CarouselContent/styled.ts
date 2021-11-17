import { StyledText } from 'common/components/Typography'
import { styled } from 'common/config'

export const Container = styled('div', {
  boxSizing: 'border-box',
  gap: '15px',
  padding: '10px 2px',
  width: '100%',
  pointerEvents: 'none',
  variants: {
    imagePosition: {
      top: {
        display: 'flex',
        flexDirection: 'column',
      },
      center: {
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
      center: {
        width: '35%',
        '@md': {
          width: '60%',
        },
      },
    },
  },
})

export const CarouselText = styled(StyledText, {
  variants: {
    center: {
      true: { textAlign: 'center' },
      false: {},
    },
    bold: {
      true: { fontWeight: '600' },
      false: {},
    },
  },
})

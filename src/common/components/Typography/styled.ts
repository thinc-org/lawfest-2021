import { styled } from 'common/config'

export const StyledText = styled('div', {
  variants: {
    // Size
    variant: {
      h1: {
        fontSize: '$10',
        fontWeight: '$medium',
        fontFamily: '$Mitr',
      },
      h2: {
        fontSize: '$9',
        fontWeight: '$medium',
        fontFamily: '$Mitr',
      },
      h3: {
        fontSize: '$8',
        fontWeight: '$medium',
        fontFamily: '$Mitr',
      },
      h4: {
        fontSize: '$7',
        fontWeight: '$medium',
        fontFamily: '$Mitr',
      },
      h5: {
        fontSize: '$6',
        fontWeight: '$medium',
        fontFamily: '$Mitr',
      },
      h6: {
        fontSize: '$5',
        fontWeight: '$regular',
        fontFamily: '$Mitr',
      },
      sub1: {
        fontSize: '$3',
        fontWeight: '$regular',
        fontFamily: '$Mitr',
      },
      sub2: {
        fontSize: '$2',
        fontWeight: '$regular',
        fontFamily: '$Mitr',
      },
      body1: {
        fontSize: '$4',
        fontWeight: '$regular',
        fontFamily: '$ChulaCharas',
      },
      body2: {
        fontSize: '$3',
        fontWeight: '$regular',
        fontFamily: '$ChulaCharas',
      },
      button: {
        fontSize: '$2',
        fontWeight: '$regular',
        fontFamily: '$Mitr',
      },
      caption: {
        fontSize: '$2',
        fontWeight: '$light',
        fontFamily: '$Mitr',
      },
      overline: {
        fontSize: '$1',
        fontWeight: '$medium',
        fontFamily: '$Mitr',
      },
    },
  },
  defaultVariants: {
    variant: 'body1',
  },
})

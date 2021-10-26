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
        fontSize: '1.125rem',
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
    mobileVariant: {
      largeTitle: {
        fontSize: '34px',
        fontWeight: '$medium',
        fontFamily: '$Mitr',
      },
      title1: {
        fontSize: '28px',
        fontWeight: '$medium',
        fontFamily: '$Mitr',
      },

      title2: {
        fontSize: '22px',
        fontWeight: '$medium',
        fontFamily: '$Mitr',
      },

      title3: {
        fontSize: '20px',
        fontWeight: '$medium',
        fontFamily: '$Mitr',
      },

      headline: {
        fontSize: '17px',
        fontWeight: '$medium',
        fontFamily: '$Mitr',
      },

      subhead: {
        fontSize: '15px',
        fontWeight: '$regular',
        fontFamily: '$Mitr',
      },

      footnote: {
        fontSize: '13px',
        fontWeight: '$regular',
        fontFamily: '$Mitr',
      },

      body: {
        fontSize: '17px',
        fontWeight: '$regular',
        fontFamily: '$ChulaCharas',
        letterSpacing: '0.3px',
      },

      callout: {
        fontSize: '16px',
        fontWeight: '$regular',
        fontFamily: '$ChulaCharas',
      },

      button: {
        fontSize: '18px',
        fontWeight: '$medium',
        fontFamily: '$Mitr',
      },

      caption1: {
        fontSize: '12px',
        fontWeight: '$regular',
        fontFamily: '$ChulaCharas',
      },

      caption2: {
        fontSize: '11px',
        fontWeight: '$regular',
        fontFamily: '$ChulaCharas',
      },
    },
  },
  defaultVariants: {
    variant: 'body1',
  },
})

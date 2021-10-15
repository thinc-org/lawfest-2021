import { styled } from 'common/config'

export const RootContainer = styled('div', {
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
  variants: {
    padding: {
      true: {
        paddingLeft: '20px',
        paddingRight: '20px',
      },
      false: {},
    },
  },
  defaultVariants: {
    padding: true,
  },
})

import { styled } from 'common/config'
import { IoMdHome } from 'react-icons/io'

export const HomeIcon = styled(IoMdHome, {
  cursor: 'pointer',
  zIndex: 99,
  marginLeft: '20px',
  transition: 'color 800ms linear',
})

export const ContactContainer = styled('div', {
  display: 'flex',
  marginRight: '20px',
  zIndex: 99,
  transition: 'opacity 800ms linear',
  variants: {
    show: {
      true: {
        opacity: 1,
      },
      false: {
        opacity: 0,
      },
    },
  },

  defaultVariants: {
    show: false,
  },
})

export const TextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginRight: '10px',
  alignItems: 'flex-end',
})

export const TopbarContainer = styled('div', {
  position: 'absolute',
  top: 0,
  zIndex: 99,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: '15px',
})

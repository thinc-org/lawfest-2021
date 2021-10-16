import { styled } from 'common/config'
import Div100vh from 'react-div-100vh'
import desktopImage from 'assets/images/home_desktop.svg'

export const PageContainer = styled(Div100vh, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '@sm': {
    display: 'none',
  },
})

export const Image = styled('div', {
  flexGrow: 1,
  width: '100%',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundImage: `url(${desktopImage})`,
})

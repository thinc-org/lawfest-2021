import { styled } from 'common/config'
import Div100vh from 'react-div-100vh'
import { IoMdHome } from 'react-icons/io'

export const ExhibitionContainer = styled(Div100vh, {
  backgroundColor: '#f1e1c7',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
})

export const HomeIcon = styled(IoMdHome, {
  marginTop: '15px',
  marginLeft: '15px',
  position: 'absolute',
  color: '$secondary950',
})

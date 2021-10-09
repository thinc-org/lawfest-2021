import { styled } from 'common/config'
import Div100vh from 'react-div-100vh'

export const PageContainer = styled(Div100vh, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const ImageContainer = styled('div', {
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

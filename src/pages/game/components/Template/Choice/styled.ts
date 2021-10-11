import { styled } from 'common/config'
import StyledButton from '../../Choice'

export const DialogueContainer = styled('div', {
  display: 'flex',
  width: '100%',
  maxWidth: '400px',
  flexDirection: 'column',
  alignItems: 'center',
})

export const ChoiceButton = styled(StyledButton, {
  marginTop: '30px',
})

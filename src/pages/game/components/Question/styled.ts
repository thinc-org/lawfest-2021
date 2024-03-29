import { StyledText } from 'common/components/Typography'
import { styled } from 'common/config'

export const QuestionContainer = styled(StyledText, {
  background:
    'linear-gradient(90deg, rgba(206, 137, 75, 0) 0%, #CE894B 48.25%, rgba(206, 137, 75, 0) 100%)',
  width: '85%',
  color: 'white',
  padding: '8px 20px',
  textAlign: 'center',
  overflowWrap: 'break-word',
})

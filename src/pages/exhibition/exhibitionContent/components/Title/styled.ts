import { StyledText } from 'common/components/Typography'
import { styled } from 'common/config'

export const TitleContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})
export const Quote = styled(StyledText, {
  color: '$primary800',
  textAlign: 'center',
  marginTop: '10px',
  marginBottom: '10px',
})

export const NameStyle = {
  leftLineColor: 'linear-gradient(270deg, #FBC55C 0%, #505B89 100%)',
  rightLineColor: 'linear-gradient(270deg, #505B89 0%, #FBC55C 100%)',
  css: {
    color: '$primary800',
    width: '50vw',
    textTransform: 'uppercase',
    '@md': { width: '70vw' },
  },
}

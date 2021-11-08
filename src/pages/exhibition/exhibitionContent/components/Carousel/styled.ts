import TextWithLine from 'common/components/TextWithLine'
import { StyledText } from 'common/components/Typography'
import { styled } from 'common/config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '50%',
  paddingBottom: '50px',
  '@lg': {
    width: '80%',
  },
  '@sm': {
    width: '100%',
  },
})

export const CarouselContainer = styled('div', {
  display: 'block',
  width: '100%',
  marginTop: '16px',
})

export const Quote = styled(StyledText, {
  color: '$seconary800',
  textAlign: 'center',
  marginTop: '10px',
  marginBottom: '10px',
})

export const Name = styled(TextWithLine, {
  color: '#505B89',
})

export const NameStyle = {
  leftLineColor: 'linear-gradient(270deg, #FBC55C 0%, #505B89 100%)',
  rightLineColor: 'linear-gradient(270deg, #505B89 0%, #FBC55C 100%)',
  css: { color: '#505B89', width: '50vw', '@md': { width: '70vw' } },
}

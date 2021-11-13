import { StyledText } from 'common/components/Typography'
import { styled } from 'common/config'
import background from 'assets/images/exhibition_title.svg'

export const Container = styled('div', {
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

export const TitleBackground = styled('div', {
  backgroundImage: `url(${background})`,
  width: 'max-content',
  backgroundSize: '100% 100%',
  padding: '90px 50px 50px 50px',
  display: 'flex',
  justifyContent: 'center',
  '@md': {
    padding: '42px 20px 25px 20px',
  },
})

export const TitleContainer = styled('div', {
  backgroundColor: '#00000080',
  borderRadius: '20px',
  padding: '0 50px',
  position: 'relative',

  '@md': {
    padding: '0 20px',
  },

  // Border
  '&::before': {
    content: '',
    position: 'absolute',
    background: 'linear-gradient(270deg, #FBC55C 0%, #505B89 100%)',
    top: '-1px',
    left: '-1px',
    right: '-1px',
    bottom: '-1px',
    borderRadius: '20px',
    padding: '5px',
    '-webkit-mask':
      'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    '-webkit-mask-composite': 'xor',
    'mask-composite': 'exclude',
  },
})

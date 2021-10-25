import { styled } from 'common/config'
import background from 'assets/images/exhibition_title.svg'

export const TitleBackground = styled('div', {
  backgroundImage: `url(${background})`,
  width: 'max-content',
  backgroundSize: '100% 100%',
  padding: '42px 20px 25px 20px',
  display: 'flex',
  justifyContent: 'center',
})
export const TitleContainer = styled('div', {
  backgroundColor: '#00000080',
  borderRadius: '20px',
  padding: '0 20px',
  position: 'relative',

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
    '-webkit-mask-composite': 'destination-out',
    'mask-composite': 'exclude',
  },
})

import type { SceneType } from 'common/constant/Scene'
import { useHistory } from 'react-router'
import {
  ContactContainer,
  HomeIcon,
  TextContainer,
  TopbarContainer,
} from './styled'
import LogoWhite from 'assets/images/lawfest_logo_white.png'
import { StyledText } from 'common/components/Typography'

function Topbar(props: { sceneType: SceneType }) {
  const { sceneType } = props
  const history = useHistory()
  return (
    <TopbarContainer>
      <HomeIcon
        color={
          ['input', 'slider', 'choice', 'result'].includes(sceneType)
            ? 'white'
            : 'black'
        }
        size="36"
        onClick={() => history.push('/')}
      />
      <ContactContainer show={sceneType === 'result'}>
        <TextContainer>
          <StyledText
            css={{ color: '$text_white_primary' }}
            mobileVariant="callout"
          >
            IG: @lawchulafest
          </StyledText>
          <StyledText
            css={{ color: '$text_white_primary' }}
            mobileVariant="callout"
          >
            FB: fb.com/RaphiCU
          </StyledText>
        </TextContainer>
        <img src={LogoWhite} alt="logo_white"></img>
      </ContactContainer>
    </TopbarContainer>
  )
}

export default Topbar

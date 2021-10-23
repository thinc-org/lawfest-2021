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
import { useEffect, useState } from 'react'

function Topbar(props: { sceneType: SceneType }) {
  const { sceneType } = props
  const [isWhite, setWhite] = useState(false)
  const history = useHistory()

  useEffect(() => {
    setWhite(['input', 'slider', 'choice', 'result'].includes(sceneType))
  }, [sceneType])

  return (
    <TopbarContainer>
      <div style={{ position: 'relative' }}>
        <HomeIcon
          color="white"
          size="36"
          show={isWhite}
          onClick={() => history.push('/')}
        />
        <HomeIcon
          css={{ position: 'absolute', left: 0 }}
          color="black"
          size="36"
          show={!isWhite}
          onClick={() => history.push('/')}
        />
      </div>
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

import type { SceneType } from 'common/constant/Scene'
import { useNavigate } from 'react-router'
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
  const navigate = useNavigate()

  useEffect(() => {
    setWhite(['input', 'slider', 'choice', 'result'].includes(sceneType))
  }, [sceneType])

  return (
    <TopbarContainer
      css={{
        marginTop:
          sceneType === 'delay' || sceneType === 'result' ? '15px' : '24px',
        width:
          sceneType === 'delay' || sceneType === 'result'
            ? '100%'
            : 'fit-content',
      }}
    >
      <div style={{ position: 'relative' }}>
        <HomeIcon
          color="white"
          size="36"
          show={isWhite}
          onClick={() => navigate('/')}
        />
        <HomeIcon
          css={{ position: 'absolute', left: 0 }}
          color="black"
          size="36"
          show={!isWhite}
          onClick={() => navigate('/')}
        />
      </div>
      <ContactContainer
        show={sceneType === 'result'}
        css={{
          display:
            sceneType === 'delay' || sceneType === 'result' ? 'flex' : 'none',
        }}
      >
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
            FB: fb.com/LawChulaFest
          </StyledText>
        </TextContainer>
        <img src={LogoWhite} alt="logo_white"></img>
      </ContactContainer>
    </TopbarContainer>
  )
}

export default Topbar

import React from 'react'
import {
  ButtonConatiner,
  StyledButton,
  ButtonText,
  StyledText,
  StyledImage,
  Container,
} from './styled'
import gameIcon from 'assets/images/game_icon.svg'
import exhibitionIcon from 'assets/images/exhibition_icon.svg'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { useNavigate } from 'react-router'

const PageButton = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <ButtonConatiner>
        <StyledButton
          onClick={() => {
            navigate('/game')
          }}
        >
          <StyledImage alt="game" src={gameIcon} />
          <ButtonText>เข้าสู่เกม</ButtonText>
        </StyledButton>
        <StyledButton
          onClick={() => {
            navigate('/exhibition')
          }}
        >
          <StyledImage
            css={{
              height: '80%',
              '@sm': {
                marginTop: '10px',
                height: '70%',
              },
            }}
            alt="game"
            src={exhibitionIcon}
          />
          <ButtonText>เข้าสู่นิทรรศการ</ButtonText>
        </StyledButton>
      </ButtonConatiner>
      <a
        style={{ textDecoration: 'none' }}
        href="https://www.lawchulafest.com/"
      >
        <StyledText>
          <MdKeyboardArrowLeft />
          กลับสู่เว็บไซต์งานรพีฯ
        </StyledText>
      </a>
    </Container>
  )
}

export default PageButton

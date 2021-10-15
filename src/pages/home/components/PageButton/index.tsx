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
import { useHistory } from 'react-router'

const PageButton = () => {
  const history = useHistory()
  return (
    <Container>
      <ButtonConatiner>
        <StyledButton
          onClick={() => {
            history.push('/game')
          }}
        >
          <StyledImage alt="game" src={gameIcon} />
          <ButtonText>เข้าสู่เกมส์</ButtonText>
        </StyledButton>
        <StyledButton
          onClick={() => {
            history.push('/exhibition')
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

      <StyledText>
        <MdKeyboardArrowLeft />
        กลับสู่เว็บไซต์งานรพีฯ
      </StyledText>
    </Container>
  )
}

export default PageButton

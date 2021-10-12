import React from 'react'
import {
  ButtonConatiner,
  StyledButton,
  ButtonText,
  StyledText,
  StyledImage,
} from './styled'
import gameIcon from 'assets/images/game_icon.svg'
import exhibitionIcon from 'assets/images/exhibition_icon.svg'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { useHistory } from 'react-router'
const PageButton = () => {
  const history = useHistory()
  return (
    <>
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
            alt="game"
            src={exhibitionIcon}
            css={{ height: '80%', '@sm': { height: 'auto' } }}
          />
          <ButtonText
            css={{
              '@sm': {
                marginTop: '18px',
              },
            }}
          >
            เข้าสู่นิทรรศการ
          </ButtonText>
        </StyledButton>
      </ButtonConatiner>

      <StyledText>
        <MdKeyboardArrowLeft />
        กลับสู่เว็บไซต์งานรพีฯ
      </StyledText>
    </>
  )
}

export default PageButton

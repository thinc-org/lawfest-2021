import React from 'react'
import { FooterContainer, FooterText, StyledImg } from './styled'
import thincLogo from 'assets/images/thinc_logo.svg'
import lawfestLogo from 'assets/images/lawfest_logo_white.png'

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <StyledImg alt="lawfest_logo" src={lawfestLogo} />
        <StyledImg alt="thinc_logo" src={thincLogo} />
      </div>
      <FooterText>Copyright © 2021 Law Festival x Thinc.</FooterText>
    </FooterContainer>
  )
}

export default Footer

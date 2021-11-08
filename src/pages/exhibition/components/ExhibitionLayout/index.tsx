import React, { ReactChild } from 'react'
import { Link } from 'react-router-dom'
import home from 'assets/pic/home.png'
import Footer from 'common/components/Footer'
import { ExhibitionContainer } from './styled'

const Layout = ({ children }: { children: ReactChild }) => {
  return (
    <ExhibitionContainer>
      <Link to="/">
        <img
          src={home}
          width="30px"
          alt="home-icon"
          style={{
            marginTop: '15px',
            marginLeft: '15px',
            position: 'absolute',
          }}
        />
      </Link>
      <div style={{ flexGrow: 1 }}>{children}</div>
      <Footer />
    </ExhibitionContainer>
  )
}

export default Layout

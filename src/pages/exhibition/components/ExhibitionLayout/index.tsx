import React, { ReactChild } from 'react'
import Div100vh from 'react-div-100vh'
import { Link } from 'react-router-dom'
import home from 'assets/pic/home.png'
import Footer from 'common/components/Footer'

const Layout = ({ children }: { children: ReactChild }) => {
  return (
    <Div100vh
      style={{
        backgroundColor: '#f1e1c7',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
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
    </Div100vh>
  )
}

export default Layout

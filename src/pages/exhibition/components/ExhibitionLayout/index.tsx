import React from 'react'
import { Link } from 'react-router-dom'
import Footer from 'common/components/Footer'
import { ExhibitionContainer, HomeIcon } from './styled'

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <ExhibitionContainer>
      <Link to="/">
        <HomeIcon size="36" />
      </Link>
      <div style={{ flexGrow: 1 }}>{children}</div>
      <Footer />
    </ExhibitionContainer>
  )
}

export default Layout

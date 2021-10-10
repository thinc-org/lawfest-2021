import { styled } from 'common/config'
import React from 'react'
import Div100vh from 'react-div-100vh'

const Container = styled(Div100vh, {
  backgroundColor: '#F1E1C7',
  width: '100%',
})

function Layout(props: React.PropsWithChildren<{}>) {
  return <Container>{props.children}</Container>
}

export default Layout

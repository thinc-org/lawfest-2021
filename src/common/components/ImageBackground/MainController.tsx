import React from 'react'

const MainControllerContext = React.createContext({})

export function MainControllerProvider(props: React.PropsWithChildren<{}>) {
  return (
    <MainControllerContext.Provider value={{}}>
      {props.children}
    </MainControllerContext.Provider>
  )
}

export const useMainController = () => {
  return React.useContext(MainControllerContext)
}

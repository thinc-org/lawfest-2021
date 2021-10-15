// This component just only delay the transition before next scene
import React, { useEffect } from 'react'
import { IDelayTransitionProps } from './types'

function DelayTransition(props: IDelayTransitionProps) {
  const { delay, onFinish } = props
  useEffect(() => {
    setTimeout(() => {
      onFinish({})
    }, delay)
  }, [delay, onFinish])

  return <></>
}

export default DelayTransition

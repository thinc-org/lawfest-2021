import React, { useEffect, useRef, useState } from 'react'
import {
  cancelAnimationFrame,
  requestAnimationFrame,
} from 'common/utils/requestAnimationFrame'
import { useHistory } from 'react-router'

function Game() {
  const [state, setState] = useState(0)
  const route = useHistory()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  useEffect(() => {
    let num = -1,
      beginTime = -1

    const animLoop = (now: number) => {
      if (beginTime === -1) beginTime = now
      if (now - beginTime >= 10000) {
        const ctx = canvasRef.current?.getContext('2d')
        const height =
          (canvasRef.current?.height! - imageRef.current?.height!) / 2
        const width = (canvasRef.current?.width! - imageRef.current?.width!) / 2
        ctx?.drawImage(imageRef.current!, width, height)
        return
      }

      console.log(now)
      num = requestAnimationFrame(animLoop)
    }
    num = requestAnimationFrame(animLoop)
    return () => {
      cancelAnimationFrame(num)
    }
  }, [])

  return (
    <div>
      <button
        onClick={() => {
          route.push('/')
        }}
      >
        Hello World
      </button>
      <canvas ref={canvasRef} width="320" height="667"></canvas>
      <img ref={imageRef} src="logo.svg" alt="logo"></img>
    </div>
  )
}

export default Game

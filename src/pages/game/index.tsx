import React, { useEffect, useRef, useState } from 'react'
import {
  cancelAnimationFrame,
  requestAnimationFrame,
} from 'common/utils/requestAnimationFrame'
import { LogoContainer, LogoImage } from './styled'
import Logo from 'assets/logo.svg'

const inkPos = [
  [60, 190, '#CE894B', '#EFA561', 5, 400],
  [300, 270, '#FBC55C', '#FBC55C', 8, 400],
  [200, 450, '#444C71', '#444C71', 17, 1000],
]

function Game() {
  const [state, setState] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    let num = -1,
      beginTime = -1,
      nowCnt = 0
    const ctx = canvasRef.current?.getContext('2d')!

    let particle: any = []

    const addInk = (
      posX: number,
      posY: number,
      colorOne: string,
      colorTwo: string,
      size: number,
      time: number
    ) => {
      for (var i = 0; i < 36 * 2; i++) {
        particle.push({
          x: posX,
          y: posY,
          angle: i * 5,
          size: size + Math.random() * 3,
          life: time + Math.random() * 50,
          colorOne,
          colorTwo,
        })
      }
    }

    const render = () => {
      for (var i = 0; i < particle.length; i++) {
        const grad = ctx.createLinearGradient(0, 0, 180, 0)
        var p = particle[i]

        grad.addColorStop(0, p.colorOne)
        grad.addColorStop(1, p.colorTwo)

        ctx.fillStyle = grad

        if (Math.random() < 0.1) {
          continue
        }
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2, false)
        ctx.fill()
      }
    }

    var delta = 0
    var last = Date.now()

    const animate = () => {
      delta = Date.now() - last
      last = Date.now()
      for (var i = 0; i < particle.length; i++) {
        var p = particle[i]
        p.x += Math.cos(p.angle) * 4 + Math.random() * 2 - Math.random() * 2
        p.y += Math.sin(p.angle) * 4 + Math.random() * 2 - Math.random() * 2
        p.life -= delta
        p.size -= delta / 50

        if (p.size <= 0) {
          p.life = 0
        }

        if (p.life <= 0) {
          particle.splice(i--, 1)
          continue
        }
      }
    }

    const animLoop = (now: number) => {
      const diff = now - beginTime
      if (diff >= 1000 && nowCnt === 0) {
        addInk(
          +inkPos[nowCnt][0],
          +inkPos[nowCnt][1],
          inkPos[nowCnt][2].toString(),
          inkPos[nowCnt][3].toString(),
          +inkPos[nowCnt][4],
          +inkPos[nowCnt][5]
        )
        nowCnt++
      } else if (diff >= 2000 && nowCnt === 1) {
        addInk(
          +inkPos[nowCnt][0],
          +inkPos[nowCnt][1],
          inkPos[nowCnt][2].toString(),
          inkPos[nowCnt][3].toString(),
          +inkPos[nowCnt][4],
          +inkPos[nowCnt][5]
        )
        nowCnt++
      } else if (diff >= 3000 && nowCnt === 2) {
        addInk(
          +inkPos[nowCnt][0],
          +inkPos[nowCnt][1],
          inkPos[nowCnt][2].toString(),
          inkPos[nowCnt][3].toString(),
          +inkPos[nowCnt][4],
          +inkPos[nowCnt][5]
        )
        nowCnt++
      } else if (diff >= 7000) {
        setState(1)
        return
      }
      requestAnimationFrame(animLoop)
      animate()
      render()
    }

    ctx.fillStyle = '#F1E1C7'
    ctx.fillRect(0, 0, canvasRef.current?.width!, canvasRef.current?.height!)
    num = requestAnimationFrame(animLoop)

    return () => {
      cancelAnimationFrame(num)
    }
  }, [])

  return (
    <LogoContainer>
      <LogoImage
        show={state ? 'open' : 'close'}
        ref={imageRef}
        src={Logo}
        alt="logo"
      ></LogoImage>
      <canvas ref={canvasRef} width="414" height="896"></canvas>
    </LogoContainer>
  )
}

export default Game

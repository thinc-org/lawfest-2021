import React, { useEffect, useRef, useState } from 'react'
import {
  cancelAnimationFrame,
  requestAnimationFrame,
} from 'common/utils/requestAnimationFrame'
import { LogoContainer, LogoImage } from './styled'
import Logo from 'assets/logo.svg'
import { INK_POS } from './constant'
import { IInkRender } from './typed'

function Game() {
  const [state, setState] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    let num = -1,
      beginTime = -1,
      nowCnt = 0
    const ctx = canvasRef.current?.getContext('2d')!

    let particle: IInkRender[] = []

    const addInk = (
      posX: number,
      posY: number,
      colorStopFirst: string,
      colorStopSecond: string,
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
          colorStopFirst,
          colorStopSecond,
        })
      }
    }

    const render = () => {
      for (var i = 0; i < particle.length; i++) {
        const grad = ctx.createLinearGradient(0, 0, 180, 0)
        const p = particle[i]
        grad.addColorStop(0, p.colorStopFirst)
        grad.addColorStop(1, p.colorStopSecond)

        ctx.fillStyle = grad

        if (Math.random() < 0.1) {
          continue
        }
        ctx.globalAlpha = 0.5
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
      if (nowCnt < INK_POS.length && diff >= INK_POS[nowCnt].delay) {
        const { isImage, posX, posY, life, size, colorStart, colorStop } =
          INK_POS[nowCnt++]
        if (isImage) {
          setState(1)
          return
        }
        addInk(posX, posY, colorStart, colorStop, size, life)
      }

      const finalPos = INK_POS[INK_POS.length - 1]

      const num = requestAnimationFrame(animLoop)
      if (finalPos.delay + finalPos.life + 100 <= diff) return num
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

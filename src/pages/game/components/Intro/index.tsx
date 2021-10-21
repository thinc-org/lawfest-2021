import React, { useEffect, useRef, useState } from 'react'
import {
  cancelAnimationFrame,
  requestAnimationFrame,
} from 'common/utils/requestAnimationFrame'
import { LogoContainer, LogoImage } from './styled'
import Logo from 'assets/logo.svg'
import { INK_POS } from './constant'
import { IInkRender } from '../../typed'
import { useMainController } from 'common/context/Controller/MainController'
import { SCENE } from 'common/constant/Scene'

function Intro() {
  const [state, setState] = useState(0)
  const { handleSetNowScene, nowScene } = useMainController()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let num = -1,
      beginTime = -1,
      nowCnt = 0
    const ctx = canvasRef.current?.getContext('2d')!

    let particle: IInkRender[] = []

    const resizer = new ResizeObserver(() => {
      if (!canvasRef.current || !containerRef.current) return
      canvasRef.current.width = containerRef.current.clientWidth
      canvasRef.current.height = containerRef.current.clientHeight
    })

    if (containerRef.current) resizer.observe(containerRef.current)

    const addInk = (
      posX: number,
      posY: number,
      colorStopFirst: string,
      colorStopSecond: string,
      size: number,
      time: number,
      opacity: number
    ) => {
      for (var i = 0; i < 36 * 2.3; i++) {
        particle.push({
          x: posX + 43,
          y: posY,
          angle: i * 5,
          size: size + Math.random() * 3,
          life: time + Math.random() * 50,
          colorStopFirst,
          colorStopSecond,
          opacity,
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
        ctx.globalAlpha = p.opacity
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 1.5, false)
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
        p.x += Math.cos(p.angle) * 4 + Math.random() * 1.7 - Math.random() * 1.7
        p.y += Math.sin(p.angle) * 4 + Math.random() * 1.7 - Math.random() * 1.7
        p.life -= delta
        p.size -= delta / 80

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
        const {
          opacity,
          isImage,
          posX,
          posY,
          life,
          size,
          colorStart,
          colorStop,
        } = INK_POS[nowCnt++]
        if (isImage) {
          setState(1)
          return
        }
        addInk(posX, posY, colorStart, colorStop, size, life, opacity)
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
      resizer.disconnect()
    }
  }, [])

  return (
    <LogoContainer
      ref={containerRef}
      show={nowScene === 'intro' ? 'open' : 'close'}
    >
      <LogoImage
        show={state ? 'open' : 'close'}
        src={Logo}
        alt="logo"
        onTransitionEnd={() => {
          window.setTimeout(
            () => handleSetNowScene(SCENE['intro'].nextScene),
            800
          )
        }}
      ></LogoImage>
      <canvas ref={canvasRef} width="496" height="896"></canvas>
    </LogoContainer>
  )
}

export default Intro

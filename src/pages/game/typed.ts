export interface IInkDetail {
  delay: number
  posX: number
  posY: number
  size: number
  life: number
  colorStart: string
  colorStop: string
  opacity: number
  isImage?: boolean
}

export interface IInkRender {
  x: number
  y: number
  angle: number
  size: number
  life: number
  colorStopFirst: string
  colorStopSecond: string
  opacity: number
}
import { CSS } from '@stitches/react'

export interface SliderProps {
  value: number
  onChange: (value: number) => void
  css?: CSS
}

import { createStitches } from "@stitches/react"
import { palette } from "./palette"
import ChulaCharas from "assets/fonts/ChulaCharasNewReg.ttf"
import ChulaCharasBold from "assets/fonts/ChulaCharasNewBold.ttf"

// Default theme
export const { styled, theme, keyframes, prefix, css, globalCss } =
  createStitches({
    theme: {
      colors: {
        ...palette,
      },
      fonts: {
        Mitr: "'Kanit', sans-serif",
        ChulaCharas: "'ChulaCharas', sans-serif",
      },
      fontSizes: {
        1: "0.625rem",
        2: "0.8rem",
        3: "0.9rem",
        4: "1rem",
        5: "1.1rem",
        6: "1.3rem",
        7: "1.5rem",
        8: "2rem",
        9: "3rem",
        10: "3.75rem",
      },
      fontWeights: {
        light: 300,
        regular: 400,
        medium: 500,
      },
    },
    media: {
      xs: "(max-width: 320px)",
      sm: "(max-width: 496px)",
      md: "(max-width: 768px)",
      lg: "(max-width: 960px)",
      xl: "(max-width: 1280px)",
    },
  })

globalCss({
  "@font-face": [
    {
      fontFamily: "ChulaCharas",
      fontWeight: 400,
      fontDisplay: "swap",
      src: `url('${ChulaCharas}') format('truetype')`,
    },
    {
      fontFamily: "ChulaCharas",
      fontWeight: 700,
      fontDisplay: "swap",
      src: `url('${ChulaCharasBold}') format('truetype')`,
    },
  ],
  "@import": [
    "url('https://fonts.googleapis.com/css2?family=Mitr:wght@300;400;500&display=swap')",
  ],
})()

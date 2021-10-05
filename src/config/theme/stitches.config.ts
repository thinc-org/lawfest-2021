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
        1: "10px",
        2: "12px",
        3: "14px",
        4: "16px",
        5: "18px",
        6: "20px",
        7: "24px",
        8: "36px",
        9: "48px",
        10: "60px",
      },
      fontWeights: {
        light: 300,
        regular: 400,
        medium: 500,
      },
      shadows: {
        shadow1:
          "-4px 0px 8px rgba(0, 0, 0, 0.04), 4px 4px 8px rgba(0, 0, 0, 0.04);",
        shadow2:
          "0px 9.41px 17.5497px rgba(0, 0, 0, 0.06), 0px 4.79px 9.65349px rgba(0, 0, 0, 0.04), 0px 3.28925px 5.12634px rgba(0, 0, 0, 0.03), 0px 0.711551px 2.1625px rgba(0, 0, 0, 0.0196802);",
        shadow3:
          "0px 3px 6px -4px rgba(0, 0, 0, 0.12), 0px 6px 16px rgba(0, 0, 0, 0.08), 0px 9px 28px 8px rgba(0, 0, 0, 0.05);",
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

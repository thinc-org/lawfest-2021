import { Theme } from "@emotion/react"

export const theme: Theme = {
  palette: {
    primary: {
      50: "#E6EBFF",
      100: "#E6EBFF",
      200: "#D4DCFF",
      300: "#C1CEFF",
      400: "#A7B4E6",
      500: "#8B98C8",
      600: "#7C8AC3",
      700: "#6572A6",
      800: "#505B89",
      900: "#3C456C",
      950: "#29314F",
    },
    secondary: {
      100: "#FFF7F0",
      200: "#FFE5CD",
      300: "#FFD3AB",
      400: "#FABE87",
      500: "#F0A561",
      600: "#CE894B",
      700: "#AC6F37",
      800: "#8A5627",
      900: "#683F19",
      950: "#46290E",
    },
    black: {
      active: "#020303",
      disabled: "#AFB2B6",
      10: "#FCFCFC",
      50: "#F2F2F3",
      100: "#E5E5E6",
      200: "#CACCCE",
      300: "#AFB2B6",
      400: "#93999F",
      500: "#777F88",
      600: "#5E656E",
      700: "#464C53",
      800: "#2E3338",
      900: "#16191D",
      950: "#0B0D0F",
    },
    backgroundColor: {
      light: {
        primary: "#F0E2C7",
        secondary: "#FFF1D8",
        tertiary: "#D9CBB0",
      },
      dark: {
        primary: "#514939",
        secondary: "#685E4B",
        tertiary: "#7F735E",
      },
    },
    textColor: {
      white: {
        primary: "#FFFFFF",
        secondary: "rgba(255, 255, 255, 0.72)",
        tertiary: "rgba(255, 255, 255, 0.48)",
        quarternary: "rgba(255, 255, 255, 0.32)",
      },
      black: {
        primary: "#020303",
        secondary: "rgba(2, 3, 3, 0.72)",
        tertiary: "rgba(2, 3, 3, 0.48)",
        quarternary: "rgba(2, 3, 3, 0.32)",
      },
    },
  },
}

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
  xxxl: 1920,
} as const

type BreakpointsKey = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl"

function mq(maxWidth: BreakpointsKey) {
  return `@media screen and (max-width: ${breakpoints[maxWidth]}px)`
}

export { mq }

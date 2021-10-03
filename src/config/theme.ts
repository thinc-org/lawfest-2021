export const theme = {};

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
  xxxl: 1920,
} as const;

type BreakpointsKey = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";

function mq(maxWidth: BreakpointsKey) {
  return `@media screen and (max-width: ${breakpoints[maxWidth]}px)`;
}

export { mq };

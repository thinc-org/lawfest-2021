declare global {
  interface Window {
    mozRequestAnimationFrame: any
    webkitRequestAnimationFrame: any
    msRequestAnimationFrame: any
    mozCancelAnimationFrame: any
  }
}

export const requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function (f) {
    return setTimeout(f, 1000 / 60)
  } // simulate calling code 60

export const cancelAnimationFrame =
  window.cancelAnimationFrame ||
  window.mozCancelAnimationFrame ||
  function (requestID) {
    clearTimeout(requestID)
  } //fall back

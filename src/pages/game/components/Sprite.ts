import { Application, Texture, Resource, Sprite, Container } from 'pixi.js'

/* Credit: https://github.com/isd-sgcu/cu-the-journey/blob/dev/src/components/AnimationScene/Sprite/ */

type SpriteState = 'LOAD' | 'PROCESS' | 'FINALIZE' | 'DONE'

export class BaseSprite extends Sprite {
  protected state: SpriteState = 'LOAD'

  protected realWidth: number

  protected realHeight: number

  protected onFinish?(): void

  constructor(texture: Texture<Resource>, _width: number, _height: number) {
    super(texture)
    this.realWidth = _width
    this.realHeight = _height
  }

  resizeToApp(app: Application) {
    const scaleX = app.screen.width / this.realWidth
    const scaleY = app.screen.height / this.realHeight

    const scale = Math.max(scaleX, scaleY)

    this.scale.set(scale, scale)
  }

  updateState(_delta: number) {
    switch (this.state) {
      case 'LOAD':
        this.state = 'PROCESS'
        break
      case 'FINALIZE':
        this.state = 'DONE'
        this.onFinish?.()
        break
      default:
        break
    }
  }

  setup(container: Container) {
    this.state = 'LOAD'
    this.alpha = 0
    container.addChild(this)
  }

  reset() {
    this.onFinish = undefined
  }

  setFinallizing(onFinish: () => void) {
    this.onFinish = onFinish
    this.state = 'FINALIZE'
  }
}

export class FadeSprite extends BaseSprite {
  updateState(_delta: number) {
    switch (this.state) {
      case 'LOAD':
        if (this.alpha < 1) {
          this.alpha += _delta * 0.02
        } else {
          this.state = 'PROCESS'
        }
        break
      case 'FINALIZE':
        if (this.alpha >= 0) {
          this.alpha -= _delta * 0.02
        } else {
          this.state = 'DONE'
          this.onFinish?.()
        }
        break
      default:
        break
    }
  }
}

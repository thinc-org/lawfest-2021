import { Application, Container, Graphics } from 'pixi.js'
import { BaseSprite, FadeSprite, ZoomSprite } from './Sprite'

interface IScene {
  name: string
  sprite: BaseSprite
}

interface SceneSwitcherSetting {
  type: 'color' | 'image'
  bgImg?: string
  bgColor?: number
}

export class SceneEngine {
  private app: Application

  private rootContainer: Container

  private zoomContainer: Container

  private sceneList: IScene[]

  private currentScene: BaseSprite | null

  private prevScene: BaseSprite[]

  constructor(_app: Application) {
    this.app = _app
    this.sceneList = []
    this.rootContainer = new Container()
    this.zoomContainer = new Container()
    this.currentScene = null
    this.prevScene = []

    this.app.stage.addChild(this.zoomContainer, this.rootContainer)
  }

  appendSceneList(scene: IScene[]) {
    this.sceneList = [...this.sceneList, ...scene]
  }

  removeSprite(sprite: BaseSprite) {
    this.rootContainer.removeChild(sprite)
    this.zoomContainer.removeChild(sprite)
    sprite.reset()
  }

  sceneSwitcher(setting: SceneSwitcherSetting) {
    const { type, bgImg, bgColor } = setting
    if (type === 'color' && typeof bgColor !== undefined) {
      const backgroundGraphic = new Graphics()

      backgroundGraphic
        .beginFill(bgColor)
        .lineStyle(0)
        .drawRect(0, 0, 1200, 1800)
        .endFill()

      const backgroundTexture =
        this.app.renderer.generateTexture(backgroundGraphic)
      const backgroundSprite = new FadeSprite(
        backgroundTexture,
        backgroundTexture.width,
        backgroundTexture.height
      )

      if (this.currentScene) {
        this.currentScene.setFinalizing(() => {
          this.prevScene.push(this.currentScene!)
        })
      }

      backgroundSprite.setup(this.rootContainer)
      this.currentScene = backgroundSprite
    }
    if (type === 'image' && bgImg) {
      const newSprite = this.sceneList.find((val) => val.name === bgImg)?.sprite
      if (!newSprite || this.currentScene === newSprite) {
        return
      }

      if (this.currentScene) {
        this.currentScene.setFinalizing(() => {
          this.prevScene.push(this.currentScene!)
        })
      }

      if (newSprite instanceof ZoomSprite) {
        newSprite.setup(this.zoomContainer)
      } else {
        newSprite.setup(this.rootContainer)
      }

      this.currentScene = newSprite
    }
  }

  update(delta: number) {
    const { width, height } = this.app.screen
    ;[...this.rootContainer.children, ...this.zoomContainer.children].forEach(
      (sprite: any) => {
        if (!sprite) return
        sprite.updateState(delta)
        sprite.resizeToApp(this.app)
      }
    )

    if (this.prevScene.length !== 0) {
      this.prevScene.forEach((val, key) => {
        if (val.getState() === 'DONE') {
          this.removeSprite(val)
          this.prevScene.splice(key, 1)
        }
      })
    }

    this.rootContainer.x = width / 2
    this.rootContainer.y = height / 2
    this.rootContainer.pivot.x = this.rootContainer.width / 2
    this.rootContainer.pivot.y = this.rootContainer.height / 2

    this.zoomContainer.x = width / 2
    this.zoomContainer.y = height / 2
    this.zoomContainer.pivot.x = this.zoomContainer.width / 2
    this.zoomContainer.pivot.y = this.zoomContainer.height / 2
  }
}

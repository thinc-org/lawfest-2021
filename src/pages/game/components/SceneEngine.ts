import { Application, Container, Graphics } from 'pixi.js'
import { BaseSprite, FadeSprite } from './Sprite'

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

  private sceneList: IScene[]

  private currentScene: BaseSprite | null

  private nextScene: BaseSprite | null

  constructor(_app: Application) {
    this.app = _app
    this.sceneList = []
    this.rootContainer = new Container()
    this.app.stage.addChild(this.rootContainer)
    this.currentScene = null
    this.nextScene = null

    this.rootContainer.sortableChildren = true
  }

  appendSceneList(scene: IScene[]) {
    this.sceneList = [...this.sceneList, ...scene]
  }

  removeSprite(sprite: BaseSprite) {
    this.rootContainer.removeChild(sprite)
  }

  sceneSwitcher(setting: SceneSwitcherSetting) {
    const { type, bgImg, bgColor } = setting
    if (type === 'color' && typeof bgColor !== undefined) {
      const backgroundGraphic = new Graphics()
      backgroundGraphic
        .beginFill(bgColor)
        .lineStyle(0)
        .drawRect(0, 0, this.app.screen.width, this.app.screen.height)
        .endFill()

      const backgroundTexture =
        this.app.renderer.generateTexture(backgroundGraphic)
      const backgroundSprite = new FadeSprite(
        backgroundTexture,
        backgroundTexture.width,
        backgroundTexture.height
      )

      if (this.currentScene) {
        this.removeSprite(this.currentScene)
      }
      this.rootContainer.addChild(backgroundSprite)
      this.currentScene = backgroundSprite
    }
    if (type === 'image' && bgImg) {
      const newSprite = this.sceneList.find((val) => val.name === bgImg)?.sprite
      if (!newSprite || this.currentScene === newSprite) return

      this.nextScene = newSprite
      this.rootContainer.addChild(newSprite)

      if (this.currentScene) {
        this.removeSprite(this.currentScene)
      }

      this.currentScene = newSprite
    }
  }

  update() {
    const { width, height } = this.app.screen
    ;[this.currentScene, this.nextScene].forEach((sprite) => {
      if (!sprite) return

      sprite.resizeToApp(this.app)
    })

    this.rootContainer.x = width / 2
    this.rootContainer.y = height / 2
    this.rootContainer.pivot.x = this.rootContainer.width / 2
    this.rootContainer.pivot.y = this.rootContainer.height / 2
  }
}

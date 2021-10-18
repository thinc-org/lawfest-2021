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

  private prevScene: BaseSprite[]

  constructor(_app: Application) {
    this.app = _app
    this.sceneList = []
    this.rootContainer = new Container()
    this.app.stage.addChild(this.rootContainer)
    this.currentScene = null
    this.prevScene = []

    this.rootContainer.sortableChildren = true
  }

  appendSceneList(scene: IScene[]) {
    this.sceneList = [...this.sceneList, ...scene]
  }

  removeSprite(sprite: BaseSprite) {
    this.rootContainer.removeChild(sprite)
    sprite.reset()
  }

  sceneSwitcher(setting: SceneSwitcherSetting) {
    const { type, bgImg, bgColor } = setting
    if (type === 'color' && typeof bgColor !== undefined) {
      const backgroundGraphic = new Graphics()
      backgroundGraphic
        .beginFill(bgColor)
        .lineStyle(0)
        .drawRect(0, 0, this.app.screen.width * 2, this.app.screen.height * 2)
        .endFill()

      const backgroundTexture =
        this.app.renderer.generateTexture(backgroundGraphic)
      const backgroundSprite = new FadeSprite(
        backgroundTexture,
        backgroundTexture.width,
        backgroundTexture.height
      )

      if (this.currentScene) {
        this.prevScene.push(this.currentScene)
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
        this.prevScene.push(this.currentScene)
      }

      newSprite.setup(this.rootContainer)
      this.currentScene = newSprite
    }
  }

  update(delta: number) {
    const { width, height } = this.app.screen
    this.rootContainer.children.forEach((sprite: any) => {
      if (!sprite) return
      sprite.updateState(delta)
      sprite.resizeToApp(this.app)
    })

    if (this.prevScene.length === 0) {
      this.prevScene.forEach((val) => {
        this.removeSprite(val)
      })
      this.prevScene = []
    }

    this.rootContainer.x = width / 2
    this.rootContainer.y = height / 2
    this.rootContainer.pivot.x = this.rootContainer.width / 2
    this.rootContainer.pivot.y = this.rootContainer.height / 2
  }
}

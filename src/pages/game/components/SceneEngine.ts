import { Application, Sprite, Container } from 'pixi.js'

interface IScene {
  name: string
  sprite: Sprite
}

interface SceneSwitcherSetting {
  type: 'color' | 'image'
  bgImg?: string
  bgColor?: string
}

export class SceneEngine {
  private app: Application

  private rootContainer: Container

  private sceneList: IScene[]

  private currentScene: Sprite | null

  private nextScene: Sprite | null

  constructor(_app: Application) {
    this.app = _app
    this.sceneList = []
    this.rootContainer = new Container()
    this.app.stage.addChild(this.rootContainer)
    this.currentScene = null
    this.nextScene = null
  }

  appendSceneList(scene: IScene[]) {
    this.sceneList = [...this.sceneList, ...scene]
  }

  removeSprite(sprite: Sprite) {
    this.rootContainer.removeChild(sprite)
  }

  sceneSwitcher(setting: SceneSwitcherSetting) {
    const { type, bgImg, bgColor } = setting
    console.log(type, bgImg, bgColor)
    if (type === 'color' && bgColor) {
    }
    if (type === 'image' && bgImg) {
      const newSprite = this.sceneList.find((val) => val.name === bgImg)?.sprite
      console.log(this.sceneList)
      if (!newSprite) return

      if (this.currentScene) {
        this.removeSprite(this.currentScene)
      }

      this.currentScene = newSprite
      this.rootContainer.addChild(newSprite)
    }
  }

  update() {
    ;[this.currentScene, this.nextScene].forEach((sprite) => {
      if (!sprite) return
      const scaleX = this.rootContainer.width / sprite.width
      const scaleY = this.rootContainer.height / sprite.height

      sprite.scale.set(Math.max(scaleX, scaleY), Math.max(scaleX, scaleY))
    })

    const { width, height } = this.app.screen

    this.rootContainer.x = width / 2
    this.rootContainer.y = height / 2
    this.rootContainer.pivot.x = this.rootContainer.width / 2
    this.rootContainer.pivot.y = this.rootContainer.height / 2
  }
}

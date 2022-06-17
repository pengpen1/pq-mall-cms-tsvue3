import { App } from 'vue'
import { registerElement } from './register-element'
import { registerIcons } from './register-Icons'
import { registerProperties } from './register-properties'

export function registerApp(app: App): void {
  registerElement(app)
  registerIcons(app)
  registerProperties(app)
}

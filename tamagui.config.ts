// tamagui.config.ts
import { createTamagui } from '@tamagui/core'
import { config as defaultConfig } from '@tamagui/config'
import { themes } from './themes' // yeni themes dosyası

const config = createTamagui({
  ...defaultConfig,
  themes, // artık bu satır doğru
})

export type Conf = typeof config

declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}

export default config

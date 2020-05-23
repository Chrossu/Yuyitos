import { AppActions } from "types/appActions"

export const setLightTheme = (): AppActions => ({
  type: 'SET_LIGHT_THEME'
})

export const setDarkTheme = (): AppActions => ({
  type: 'SET_DARK_THEME'
})
import { AppActions } from "types/appActions"
import { SET_LIGHT_THEME, SET_DARK_THEME } from "types/theme/theme.actions"

export const setLightTheme = (): AppActions => ({
  type: SET_LIGHT_THEME
})

export const setDarkTheme = (): AppActions => ({
  type: SET_DARK_THEME
})
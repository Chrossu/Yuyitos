export const SET_LIGHT_THEME = 'SET_LIGHT_THEME'
export const SET_DARK_THEME = 'SET_DARK_THEME'

export type SetThemeAction = {
  type: string
}

export type ThemeActions = | SetThemeAction
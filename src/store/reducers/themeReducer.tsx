import { LIGHT, DARK } from "utils/constants"
import { Theme } from "types/theme/Theme"
import { ThemeActions, SET_LIGHT_THEME, SET_DARK_THEME } from "types/theme/theme.actions"

const mainState: Theme = LIGHT

const themeReducer = (state: Theme = mainState, action: ThemeActions) => {
  switch (action.type) {
    case SET_LIGHT_THEME:
      return LIGHT
    case SET_DARK_THEME:
      return DARK
    default:
      return state
  }
}

export default themeReducer
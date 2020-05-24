import {
  LIGHT_PRIMARY_COLOR, LIGHT_SECONDARY_COLOR, DARK_PRIMARY_COLOR, DARK_SECONDARY_COLOR, DARK_TEXT_WITH_PRIMARY, DARK_TEXT_WITH_SECONDARY,
  LIGHT_DEFAULT_BACKGROUND, DARK_DEFAULT_BACKGROUND, LIGHT_DEFAULT_HOLLOW_BACKGROUND, LIGHT_DEFAULT_TEXT, LIGHT_DISABLED_BORDER,
  DARK_DEFAULT_HOLLOW_BACKGROUND, DARK_DISABLED_COLOR, DARK_DISABLED_BORDER, DARK_DEFAULT_TEXT, DARK_TEXT_DISABLED, LIGHT_DISABLED_COLOR,
  LIGHT_TEXT_DISABLED, LIGHT_TEXT_WITH_PRIMARY, LIGHT_TEXT_WITH_SECONDARY
} from "./colorConstants"

export type GlobalTheme = {
  body: string
  defaultHollowBackground: string
  defaultBackground: string
  defaultText: string
  primaryColor: string
  secondaryColor: string
  textWithPrimary: string
  textWithSecondary: string
  buttonTheme: ButtonTheme
}

type ButtonTheme = {
  disabledColor: string,
  disabledBorder: string,
  disabledText: string
}

export const lightTheme: GlobalTheme = {
  body: LIGHT_DEFAULT_BACKGROUND,
  defaultHollowBackground: LIGHT_DEFAULT_HOLLOW_BACKGROUND,
  defaultBackground: LIGHT_DEFAULT_BACKGROUND,
  defaultText: LIGHT_DEFAULT_TEXT,
  primaryColor: LIGHT_PRIMARY_COLOR,
  secondaryColor: LIGHT_SECONDARY_COLOR,
  textWithPrimary: LIGHT_TEXT_WITH_PRIMARY,
  textWithSecondary: LIGHT_TEXT_WITH_SECONDARY,
  buttonTheme: {
    disabledColor: LIGHT_DISABLED_COLOR,
    disabledBorder: LIGHT_DISABLED_BORDER,
    disabledText: LIGHT_TEXT_DISABLED
  }
}

export const darkTheme: GlobalTheme = {
  body: DARK_DEFAULT_BACKGROUND,
  defaultHollowBackground: DARK_DEFAULT_HOLLOW_BACKGROUND,
  defaultBackground: DARK_DEFAULT_BACKGROUND,
  defaultText: DARK_DEFAULT_TEXT,
  primaryColor: DARK_PRIMARY_COLOR,
  secondaryColor: DARK_SECONDARY_COLOR,
  textWithPrimary: DARK_TEXT_WITH_PRIMARY,
  textWithSecondary: DARK_TEXT_WITH_SECONDARY,
  buttonTheme: {
    disabledColor: DARK_DISABLED_COLOR,
    disabledBorder: DARK_DISABLED_BORDER,
    disabledText: DARK_TEXT_DISABLED
  }
}
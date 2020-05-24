import {
  LIGHT_PRIMARY_COLOR, LIGHT_SECONDARY_COLOR, DARK_PRIMARY_COLOR, DARK_SECONDARY_COLOR, DARK_TEXT_WITH_PRIMARY, DARK_TEXT_WITH_SECONDARY,
  LIGHT_DEFAULT_BACKGROUND, DARK_DEFAULT_BACKGROUND, LIGHT_DEFAULT_HOLLOW_BACKGROUND, LIGHT_DEFAULT_TEXT, LIGHT_DISABLED_BORDER,
  DARK_DEFAULT_HOLLOW_BACKGROUND, DARK_DISABLED_COLOR, DARK_DISABLED_BORDER, DARK_DEFAULT_TEXT, DARK_TEXT_DISABLED, LIGHT_DISABLED_COLOR,
  LIGHT_TEXT_DISABLED, LIGHT_TEXT_WITH_PRIMARY, LIGHT_TEXT_WITH_SECONDARY, DARK_SIDEBAR_BACKGROUND, DARK_SIDEBAR_HOVER, LIGHT_SIDEBAR_BACKGROUND,
   LIGHT_SIDEBAR_HOVER, LIGHT_DEFAULT_TEXT_ACTIVE, DARK_DEFAULT_TEXT_ACTIVE, LIGHT_LIGHT_BORDER, DARK_LIGHT_BORDER
} from "./colorConstants"

export type GlobalTheme = {
  defaultHollowBackground: string
  defaultBackground: string
  defaultText: string
  textActive: string
  lightBorder: string
  primaryColor: string
  secondaryColor: string
  textWithPrimary: string
  textWithSecondary: string
  buttonTheme: ButtonTheme
  sidebarTheme: SidebarTheme
}

type ButtonTheme = {
  disabledColor: string,
  disabledBorder: string,
  disabledText: string
}

type SidebarTheme = {
  background: string
  text: string
  hover: string
}

export const lightTheme: GlobalTheme = {
  defaultHollowBackground: LIGHT_DEFAULT_HOLLOW_BACKGROUND,
  defaultBackground: LIGHT_DEFAULT_BACKGROUND,
  defaultText: LIGHT_DEFAULT_TEXT,
  textActive: LIGHT_DEFAULT_TEXT_ACTIVE,
  lightBorder: LIGHT_LIGHT_BORDER,
  primaryColor: LIGHT_PRIMARY_COLOR,
  secondaryColor: LIGHT_SECONDARY_COLOR,
  textWithPrimary: LIGHT_TEXT_WITH_PRIMARY,
  textWithSecondary: LIGHT_TEXT_WITH_SECONDARY,
  // Buton theme
  buttonTheme: {
    disabledColor: LIGHT_DISABLED_COLOR,
    disabledBorder: LIGHT_DISABLED_BORDER,
    disabledText: LIGHT_TEXT_DISABLED
  },
  // Sidebar theme
  sidebarTheme: {
    background: LIGHT_SIDEBAR_BACKGROUND,
    text: LIGHT_DEFAULT_TEXT,
    hover: LIGHT_SIDEBAR_HOVER
  }
}

export const darkTheme: GlobalTheme = {
  defaultHollowBackground: DARK_DEFAULT_HOLLOW_BACKGROUND,
  defaultBackground: DARK_DEFAULT_BACKGROUND,
  defaultText: DARK_DEFAULT_TEXT,
  textActive: DARK_DEFAULT_TEXT_ACTIVE,
  lightBorder: DARK_LIGHT_BORDER,
  primaryColor: DARK_PRIMARY_COLOR,
  secondaryColor: DARK_SECONDARY_COLOR,
  textWithPrimary: DARK_TEXT_WITH_PRIMARY,
  textWithSecondary: DARK_TEXT_WITH_SECONDARY,
  buttonTheme: {
    disabledColor: DARK_DISABLED_COLOR,
    disabledBorder: DARK_DISABLED_BORDER,
    disabledText: DARK_TEXT_DISABLED
  },
  sidebarTheme: {
    background: DARK_SIDEBAR_BACKGROUND,
    text: DARK_DEFAULT_TEXT,
    hover: DARK_SIDEBAR_HOVER
  }
}
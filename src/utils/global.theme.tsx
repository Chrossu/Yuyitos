import {
  LIGHT_PRIMARY_COLOR, LIGHT_SECONDARY_COLOR, DARK_PRIMARY_COLOR, DARK_SECONDARY_COLOR, DARK_TEXT_WITH_PRIMARY, DARK_TEXT_WITH_SECONDARY,
  LIGHT_DEFAULT_PRIMARY_BACKGROUND, DARK_DEFAULT_PRIMARY_BACKGROUND, LIGHT_DEFAULT_HOLLOW_BACKGROUND, LIGHT_DEFAULT_TEXT, LIGHT_DISABLED_BORDER,
  DARK_DEFAULT_HOLLOW_BACKGROUND, DARK_DISABLED_BACKGROUND, DARK_DISABLED_BORDER, DARK_DEFAULT_TEXT, DARK_TEXT_DISABLED, LIGHT_DISABLED_BACKGROUND,
  LIGHT_TEXT_DISABLED, LIGHT_TEXT_WITH_PRIMARY, LIGHT_TEXT_WITH_SECONDARY, DARK_SIDEBAR_BACKGROUND, DARK_SIDEBAR_HOVER, LIGHT_SIDEBAR_BACKGROUND,
  LIGHT_SIDEBAR_HOVER, LIGHT_DEFAULT_TEXT_ACTIVE, DARK_DEFAULT_TEXT_ACTIVE, LIGHT_LIGHT_BORDER, DARK_LIGHT_BORDER, DARK_DEFAULT_SECONDARY_BACKGROUND,
  LIGHT_DEFAULT_SECONDARY_BACKGROUND, DARK_INPUT_BACKGROUND, DARK_INPUT_BORDER, LIGHT_INPUT_BACKGROUND, LIGHT_INPUT_BORDER, LIGHT_SIDEBAR_BORDER,
  DARK_SIDEBAR_BORDER
} from './colorConstants'

export type GlobalTheme = {
  defaultHollowBackground: string
  defaultPrimaryBackground: string
  defaultSecondaryBackground: string
  defaultText: string
  textActive: string
  lightBorder: string
  primaryColor: string
  secondaryColor: string
  textWithPrimary: string
  textWithSecondary: string
  buttonTheme: ButtonTheme
  inputTheme: InputTheme
  sidebarTheme: SidebarTheme
}

type ButtonTheme = {
  disabledBackground: string,
  disabledBorder: string,
  disabledText: string
}

type InputTheme = {
  background: string,
  border: string,
  disabledBackground: string,
  disabledBorder: string
}

type SidebarTheme = {
  background: string
  border: string
  text: string
  hover: string
}

export const lightTheme: GlobalTheme = {
  defaultHollowBackground: LIGHT_DEFAULT_HOLLOW_BACKGROUND,
  defaultPrimaryBackground: LIGHT_DEFAULT_PRIMARY_BACKGROUND,
  defaultSecondaryBackground: LIGHT_DEFAULT_SECONDARY_BACKGROUND,
  defaultText: LIGHT_DEFAULT_TEXT,
  textActive: LIGHT_DEFAULT_TEXT_ACTIVE,
  lightBorder: LIGHT_LIGHT_BORDER,
  primaryColor: LIGHT_PRIMARY_COLOR,
  secondaryColor: LIGHT_SECONDARY_COLOR,
  textWithPrimary: LIGHT_TEXT_WITH_PRIMARY,
  textWithSecondary: LIGHT_TEXT_WITH_SECONDARY,
  // Buton theme
  buttonTheme: {
    disabledBackground: LIGHT_DISABLED_BACKGROUND,
    disabledBorder: LIGHT_DISABLED_BORDER,
    disabledText: LIGHT_TEXT_DISABLED
  },
  // Input theme
  inputTheme: {
    background: LIGHT_INPUT_BACKGROUND,
    border: LIGHT_INPUT_BORDER,
    disabledBackground: LIGHT_DISABLED_BACKGROUND,
    disabledBorder: LIGHT_DISABLED_BORDER
  },
  // Sidebar theme
  sidebarTheme: {
    background: LIGHT_SIDEBAR_BACKGROUND,
    border: LIGHT_SIDEBAR_BORDER,
    text: LIGHT_DEFAULT_TEXT,
    hover: LIGHT_SIDEBAR_HOVER
  }
}

export const darkTheme: GlobalTheme = {
  defaultHollowBackground: DARK_DEFAULT_HOLLOW_BACKGROUND,
  defaultPrimaryBackground: DARK_DEFAULT_PRIMARY_BACKGROUND,
  defaultSecondaryBackground: DARK_DEFAULT_SECONDARY_BACKGROUND,
  defaultText: DARK_DEFAULT_TEXT,
  textActive: DARK_DEFAULT_TEXT_ACTIVE,
  lightBorder: DARK_LIGHT_BORDER,
  primaryColor: DARK_PRIMARY_COLOR,
  secondaryColor: DARK_SECONDARY_COLOR,
  textWithPrimary: DARK_TEXT_WITH_PRIMARY,
  textWithSecondary: DARK_TEXT_WITH_SECONDARY,
  // Button theme
  buttonTheme: {
    disabledBackground: DARK_DISABLED_BACKGROUND,
    disabledBorder: DARK_DISABLED_BORDER,
    disabledText: DARK_TEXT_DISABLED
  },
  // Input theme
  inputTheme: {
    background: DARK_INPUT_BACKGROUND,
    border: DARK_INPUT_BORDER,
    disabledBackground: DARK_DISABLED_BACKGROUND,
    disabledBorder: DARK_DISABLED_BORDER
  },
  // Sidebar theme
  sidebarTheme: {
    background: DARK_SIDEBAR_BACKGROUND,
    border: DARK_SIDEBAR_BORDER,
    text: DARK_DEFAULT_TEXT,
    hover: DARK_SIDEBAR_HOVER
  }
}
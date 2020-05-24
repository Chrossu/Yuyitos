import { ButtonProps } from './Button'

export const setBackgroundColor = ({ disabled, hollow, color, theme }: ButtonProps) => {
  if (disabled)
    return theme?.buttonTheme.disabledColor

  if (hollow) {
    return 'transparent'
  }

  switch (color) {
    case 'primary':
      return theme?.primaryColor
    case 'secondary':
      return theme?.secondaryColor
  }
}

export const setBorderColor = ({ color, disabled, theme }: ButtonProps) => {
  if (disabled)
    return theme?.buttonTheme.disabledBorder

  switch (color) {
    case 'primary':
      return theme?.primaryColor
    case 'secondary':
      return theme?.secondaryColor
  }
}

export const setTextColor = ({ disabled, hollow, color, theme }: ButtonProps) => {
  if (disabled)
    return theme?.buttonTheme.disabledText

  if (hollow) {
    switch (color) {
      case 'primary':
        return theme?.primaryColor
      case 'secondary':
        return theme?.secondaryColor
    }
  }

  switch (color) {
    case 'primary':
      return theme?.textWithPrimary
    case 'secondary':
      return theme?.textWithSecondary
  }
}
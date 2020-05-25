import styled from 'styled-components'
import { GlobalTheme } from 'utils/global.theme'

interface Props {
  theme: GlobalTheme
  fontSize?: string
  margin?: string
  padding?: string
  borderRadius?: string
  header?: boolean
  width?: string
  height?: string
  flexDirection?: string
  alignItems?: string
  justifyContent?: string
  minHeight?: string
  maxHeight?: string
  mobilePadding?: string
}

const checkIfHeader = ({ header, theme }: Props) => {
  if (header)
    return `
      background: ${theme.defaultPrimaryBackground};
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: 1px solid ${theme.lightBorder};
    `
  else return `
    background: ${theme.defaultSecondaryBackground};
  `
}

export const StyledCardContainer = styled.div`
  display: flex;
  width: ${({ width }: Props) => width ? width : '100%'};
  height: ${({ height }: Props) => height ? height : 'fit-content'};
  padding: ${({ padding }: Props) => padding ? padding : '1rem'};
  border-radius: ${({ borderRadius }: Props) => borderRadius ? borderRadius : '4px'};
  ${({ fontSize }: Props) => fontSize && `font-size: ${fontSize};`}
  ${({ margin }: Props) => margin && `margin: ${margin};`}
  ${({ flexDirection }: Props) => flexDirection && `flex-direction: ${flexDirection};`}
  ${({ alignItems }: Props) => alignItems && `align-items: ${alignItems};`}
  ${({ justifyContent }: Props) => justifyContent && `justify-content: ${justifyContent};`}
  ${({ minHeight }: Props) => minHeight && `min-height: ${minHeight};`}
  ${({ maxHeight }: Props) => maxHeight && `max-height: ${maxHeight};`}
  transition: all 0.25s linear;

  ${checkIfHeader}

  @media screen and (max-width: 1024px) {

  }

  @media screen and (max-width: 576px) {
    padding: ${({ mobilePadding }: Props) => mobilePadding ? mobilePadding : '1rem'};
  }
`
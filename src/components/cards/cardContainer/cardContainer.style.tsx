import styled from 'styled-components'
import { CardContainerProps as Props } from './CardContainer'
import { GlobalTheme } from 'utils/global.theme'

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
  transition: background 0.25s linear, color 0.25s linear, border 0.25s linear;

  ${checkIfHeader}

  ${(({ borderRadius}: Props) => borderRadius && `border-radius: ${borderRadius};`)}
  @media screen and (max-width: 1024px) {

  }

  @media screen and (max-width: 576px) {
    padding: ${({ mobilePadding }: Props) => mobilePadding ? mobilePadding : '1rem'};
  }
`
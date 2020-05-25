import styled from 'styled-components'
import { FlexContainerProps as Props } from './FlexContainer'

export const StyledFlexContainer = styled.div<Props>`
  display: flex;
  ${({ width }: Props) => width && `width: ${width};`}
  ${({ maxWidth }: Props) => maxWidth && `max-width: ${maxWidth};`}
  ${({ margin }: Props) => margin && `margin: ${margin};`}
  ${({ marginTop }: Props) => marginTop && `margin-top: ${marginTop};`}
  ${({ marginRight }: Props) => marginRight && `margin-right: ${marginRight};`}
  ${({ marginBottom }: Props) => marginBottom && `margin-bottom: ${marginBottom};`}
  ${({ marginLeft }: Props) => marginLeft && `margin-left: ${marginLeft};`}
  ${({ flexDirection }: Props) => flexDirection && `flex-direction: ${flexDirection};`}
  ${({ justifyContent }: Props) => justifyContent && `justify-content: ${justifyContent};`}
  ${({ alignItems }: Props) => alignItems && `align-items: ${alignItems};`}
  ${({ padding }: Props) => padding && `padding: ${padding};`}
  ${({ paddingRight }: Props) => paddingRight && `padding-right: ${paddingRight};`}
  ${({ paddingLeft }: Props) => paddingLeft && `padding-left: ${paddingLeft};`}
  ${({ textAlign }: Props) => textAlign && `text-align: ${textAlign};`}
  ${({ minWidth }: Props) => minWidth && `min-width: ${minWidth};`}
  ${({ minHeight }: Props) => minHeight && `min-height: ${minHeight};`}
  ${({ letterSpacing }: Props) => letterSpacing && `letter-spacing: ${letterSpacing};`}
  ${({ background }: Props) => background && `background: ${background};`}
  ${({ border }: Props) => border && `border: ${border};`}
  ${({ borderRadius }: Props) => borderRadius && `border-radius: ${borderRadius};`}
  
  @media screen and (max-width: ${({ customTabletQuery }: Props) => customTabletQuery ? customTabletQuery : '1024'}px) {
    ${({ tabletJustifyContent }: Props) => tabletJustifyContent && `justify-content: ${tabletJustifyContent};`}
    ${({ tabletFlexDirection }: Props) => tabletFlexDirection && `flex-direction: ${tabletFlexDirection};`}
    ${({ tabletAlignItems }: Props) => tabletAlignItems && `align-items: ${tabletAlignItems};`}
    ${({ tabletWidth }: Props) => tabletWidth && `width: ${tabletWidth};`}
    ${({ tabletMargin }: Props) => tabletMargin && `margin: ${tabletMargin};`}
    ${({ tabletPadding }: Props) => tabletPadding && `padding: ${tabletPadding};`}
  }

  @media screen and (max-width: ${({ customMobileQuery }: Props) => customMobileQuery ? customMobileQuery : '768'}px) {
    ${({ mobileJustifyContent }: Props) => mobileJustifyContent && `justify-content: ${mobileJustifyContent};`}
    ${({ mobileFlexDirection }: Props) => mobileFlexDirection && `flex-direction: ${mobileFlexDirection};`}
    ${({ mobileAlignItems }: Props) => mobileAlignItems && `align-items: ${mobileAlignItems};`}
    ${({ mobileWidth }: Props) => mobileWidth && `width: ${mobileWidth};`}
    ${({ mobileMargin }: Props) => mobileMargin && `margin: ${mobileMargin};`}
    ${({ mobilePadding }: Props) => mobilePadding && `padding: ${mobilePadding};`}
  }
  
`
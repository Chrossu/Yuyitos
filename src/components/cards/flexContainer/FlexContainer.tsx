import React from 'react'

import { StyledFlexContainer } from './flexContainer.style'

import { JustifyContentTypes, AlignItemsTypes, FlexDirectionTypes, TextAlignTypes } from './flexContainer.types'

export type FlexContainerProps = {
  flexDirection?: FlexDirectionTypes
  justifyContent?: JustifyContentTypes
  alignItems?: AlignItemsTypes
  minWidth?: string
  minHeight?: string
  width?: string
  maxWidth?: string
  padding?: string
  paddingRight?: string
  paddingLeft?: string
  margin?: string
  marginTop?: string
  marginLeft?: string
  marginRight?: string
  marginBottom?: string
  textAlign?: TextAlignTypes
  border?: string
  borderRadius?: string
  background?: string
  customTabletQuery?: string
  tabletFlexDirection?: FlexDirectionTypes
  tabletJustifyContent?: JustifyContentTypes
  tabletAlignItems?: AlignItemsTypes
  tabletWidth?: string
  tabletPadding?: string
  tabletMargin?: string
  letterSpacing?: string
  customMobileQuery?: string
  mobileFlexDirection?: FlexDirectionTypes
  mobileJustifyContent?: JustifyContentTypes
  mobileAlignItems?: AlignItemsTypes
  mobileWidth?: string
  mobileMargin?: string
  mobilePadding?: string
}

const FlexContainer: React.FC<FlexContainerProps> = props => {
  return (
    <StyledFlexContainer {...props}>
      {props.children}
    </StyledFlexContainer>
  )
}

export default FlexContainer
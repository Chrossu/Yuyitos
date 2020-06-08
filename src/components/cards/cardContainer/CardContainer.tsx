import React from 'react'
import { withTheme } from 'styled-components'

import { StyledCardContainer } from './cardContainer.style'
import { GlobalTheme } from 'utils/global.theme'
import { FlexDirectionTypes, AlignItemsTypes, JustifyContentTypes } from 'types/generals'

export interface CardContainerProps {
  theme: GlobalTheme
  width?: string
  height?: string
  fontSize?: string
  header?: boolean
  padding?: string
  flex?: boolean
  flexDirection?: FlexDirectionTypes
  alignItems?: AlignItemsTypes
  justifyContent?: JustifyContentTypes
  minHeight?: string
  maxHeight?: string
  margin?: string
  mobilePadding?: string
  borderRadius?: string
  style?: {}
}

const CardContainer: React.FC<CardContainerProps> = ({ style, children, ...props }) => (
  <StyledCardContainer {...props} style={style}>
    {children}
  </StyledCardContainer>
)

export default withTheme(CardContainer)
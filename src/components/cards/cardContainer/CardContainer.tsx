import React from 'react'
import { withTheme } from 'styled-components'

import { StyledCardContainer } from './cardContainer.style'
import { GlobalTheme } from 'utils/global.theme'
import { FlexDirectionTypes, AlignItemsTypes, JustifyContentTypes } from 'types/cssTypes'

interface NewCardProps {
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
  style?: {}
}

const NewCard: React.FC<NewCardProps> = props => {
  return (
    <StyledCardContainer {...props} style={props.style}>
      {props.children}
    </StyledCardContainer>
  )
}

export default withTheme(NewCard)
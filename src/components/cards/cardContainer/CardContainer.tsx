import React from 'react'
import { withTheme } from 'styled-components'

import { StyledCardContainer } from './cardContainer.style'
import { GlobalTheme } from 'utils/global.theme'

interface NewCardProps {
  theme: GlobalTheme
  height?: string
  padding?: string
  flex?: boolean
  flexDirection?: string
  alignItems?: string
  justifyContent?: string
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
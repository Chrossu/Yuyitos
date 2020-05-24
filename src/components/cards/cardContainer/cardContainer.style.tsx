import styled from 'styled-components'

interface Props {
  margin?: string
  padding?: string
  height?: string
  flexDirection?: string
  alignItems?: string
  justifyContent?: string
  minHeight?: string
  maxHeight?: string
  mobilePadding?: string
}

export const StyledCardContainer = styled.div`
  display: flex;
  margin: ${({ margin }: Props) => margin ? margin : '1rem'};
  padding: ${({ padding }: Props) => padding ? padding : '1rem'};
  height: ${({ height }: Props) => height ? height : '100%'};
  background: #fff;
  ${({ flexDirection }: Props) => flexDirection && `flex-direction: ${flexDirection};`}
  ${({ alignItems }: Props) => alignItems && `align-items: ${alignItems};`}
  ${({ justifyContent }: Props) => justifyContent && `justify-content: ${justifyContent};`}
  ${({ minHeight }: Props) => minHeight && `min-height: ${minHeight};`}
  ${({ maxHeight }: Props) => maxHeight && `max-height: ${maxHeight};`}

  @media screen and (max-width: 1024px) {

  }

  @media screen and (max-width: 576px) {
    padding: ${({ mobilePadding }: Props) => mobilePadding ? mobilePadding : '1rem'};
  }
`
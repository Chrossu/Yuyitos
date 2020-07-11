import styled from 'styled-components'
import { GlobalTheme } from 'utils/global.theme'

type Props = {
  theme: GlobalTheme
  margin?: string
  customFontSize?: string
}

const Paragraph = styled.p`
  margin: ${(({ margin }: Props) => margin ? margin : '0')};
  color: ${(({ theme }: Props) => theme.defaultText)};
  ${(({ customFontSize }: Props) => customFontSize && `font-size: ${customFontSize}`)}
`

export default Paragraph
import styled from 'styled-components'
import { GlobalTheme } from 'utils/global.theme'

type Props = {
  theme: GlobalTheme
  margin?: string
  fontSize?: string
}

const Paragraph = styled.p`
  margin: ${(({ margin }: Props) => margin ? margin : '0')};
  color: ${(({ theme }: Props) => theme.defaultText)};
  ${(({ fontSize }: Props) => fontSize && `font-size: ${fontSize}`)}
`

export default Paragraph
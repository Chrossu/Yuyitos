import styled from 'styled-components'
import { GlobalTheme } from 'utils/global.theme'

type Props = {
  theme: GlobalTheme
  activeTab?: boolean
}

const activeStyle = ({ activeTab, theme }: Props) => {
  if (activeTab) return `
    border-bottom: 2px solid ${theme.primaryColor};
    opacity: 1;
  `
}

export const StyledTabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }: Props) => theme.inputBorder};
  margin-bottom: 1rem;
`

export const StyledTab = styled.button`
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  opacity: 0.6;
  background: ${({ theme }: Props) => theme.defaultHollowBackground};
  border: 0;
  outline: 0;
  ${activeStyle}
`
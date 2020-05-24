import styled from 'styled-components'
import { GlobalTheme } from 'utils/global.theme'

import { Link } from 'react-router-dom'

type Props = {
  theme: GlobalTheme
}

export const StyledSidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  max-width: 250px;
  background: ${({ theme }: Props) => theme.sidebarTheme.background};
  color: ${({ theme }: Props) => theme.sidebarTheme.text};
  height: 100vh;
  border-right: 3px solid ${({ theme }: Props) => theme.lightBorder};
  padding: 1rem 0.5rem;
  font-weight: 500;
  transition: all 0.25s linear;
`

export const StyledList = styled.ul`
  list-style: none;
`

export const StyledLinkListItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  text-decoration: none;
  border-radius: 8px;
  padding: 1.5rem 1.25rem;

  svg {
    height: 23px;
    width: 23px;
    margin-right: 14px;
    fill: ${(({ theme }: Props) => theme.defaultText)};
  }

  &:hover {
    background: ${({ theme }: Props) => theme.sidebarTheme.hover};
  }
`

export const StyledListItemText = styled.p`
  color: ${({ theme }: Props) => theme.sidebarTheme.text};
`
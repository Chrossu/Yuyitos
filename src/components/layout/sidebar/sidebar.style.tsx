import styled from 'styled-components'
import { SidebarTheme } from './sidebar.theme'
import { Link } from 'react-router-dom'

type Props = {
  theme: SidebarTheme
}

export const StyledSidebarContainer = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 250px;
  background: ${({ theme }: Props) => theme.background};
  color: ${({ theme }: Props) => theme.text};
  height: 100vh;
  padding: 1rem 0.5rem;
  transition: all 0.25s linear;
`

export const StyledList = styled.ul`
  list-style: none;
`

export const StyledLinkListItem = styled(Link)`
  padding: 1rem 0;
  text-decoration: none;
`

export const StyledListItemText = styled.p`
  padding: 1.5rem 1.25rem;
  border-radius: 8px;
  color: ${({ theme }: Props) => theme.text};

  &:hover {
    background: ${({ theme }: Props) => theme.hover};
  }
`
import styled from 'styled-components'
import { SidebarTheme } from './sidebar.theme'

type Props = {
  theme: SidebarTheme
}

export const StyledSidebarContainer = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 250px;
  background: ${({ theme }: Props) => theme.sidebarBackground};
  color: ${({ theme }: Props) => theme.text};
  height: 100vh;
  padding: 1.5rem;
  transition: all 0.25s linear;
`

export const StyledList = styled.ul`
  list-style: none;
`

export const StyledListItem = styled.li`
  padding: 1rem 0;
  
  &:hover {
    background: ${({ theme }: Props) => theme.sidebarBackground}
  }
`

export const StyledListItemText = styled.p`
  
`
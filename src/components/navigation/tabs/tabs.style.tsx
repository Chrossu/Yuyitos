import styled from 'styled-components'

type Props = {
  active: boolean
}

export const StyledTabsContainer = styled.div`
  display: flex;
`

export const StyledTab = styled.button`
  font-size: 20px;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({ active }: Props) => active && `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`
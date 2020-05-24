import styled from 'styled-components'

type Props = {

}

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0.5rem;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.25s linear;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 468px) {
    font-size: 0.85rem;
    padding: 0.35rem 1.25rem;
  }
`
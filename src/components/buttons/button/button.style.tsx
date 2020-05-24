import styled from 'styled-components'

import { setTextColor } from './button.utils'

import { ButtonProps } from './Button'

export const StyledButton = styled.button`
  display: flex;
  opacity: 0.8;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0.5rem;
  border-radius: 3px;
  cursor: pointer;
  font-size: 1rem;
  color: ${setTextColor};
  transition: all 0.25s linear;
  height: ${({ customHeight }: ButtonProps) => customHeight ? customHeight : 'fit-content'};
  margin: ${({ margin }: ButtonProps) => margin ? margin : '0'};
  ${({ width }: ButtonProps) => width && `width: ${width};`}
  ${({ marginLeft }: ButtonProps) => marginLeft && `margin-left: ${marginLeft ? marginLeft : '0.75rem'};`}
  ${({ marginBottom }: ButtonProps) => marginBottom && `margin-bottom: ${marginBottom};`}
  ${({ noWrap }: ButtonProps) => noWrap && 'white-space: nowrap;'}

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 468px) {
    font-size: 0.85rem;
    padding: 0.35rem 1.25rem;
  }
`
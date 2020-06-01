import styled from 'styled-components'

import { setTextColor, setBorderColor, setBackgroundColor } from './button.utils'

import { ButtonProps as Props } from './Button'

export const StyledButton = styled.button`
  display: flex;
  opacity: 0.8;
  justify-content: center;
  align-items: center;
  padding: ${(({ padding }: Props) => padding ? padding : '0.75rem 1rem')};
  border-radius: 3px;
  cursor: pointer;
  font-size: ${(({ fontSize}: Props) => fontSize ? fontSize : '0.9rem')};
  transition: all 0.25s linear;
  border: 1px solid ${setBorderColor};
  background: ${setBackgroundColor};
  color: ${setTextColor};
  height: ${({ customHeight }: Props) => customHeight ? customHeight : 'fit-content'};
  margin: ${({ margin }: Props) => margin ? margin : '0'};
  ${({ width }: Props) => width && `width: ${width};`}
  ${({ marginLeft }: Props) => marginLeft && `margin-left: ${marginLeft ? marginLeft : '0.75rem'};`}
  ${({ marginBottom }: Props) => marginBottom && `margin-bottom: ${marginBottom};`}
  ${({ noWrap }: Props) => noWrap && 'white-space: nowrap;'}

  svg {
    height: 18px;
    width: 18px;
    margin-right: 0.5rem;
    fill: ${setTextColor};
  }

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: red !important;
  }

  @media screen and (max-width: 468px) {
    font-size: 0.85rem;
    padding: 0.35rem 1.25rem;
  }
`
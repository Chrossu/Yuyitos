import styled from 'styled-components'
import { GlobalTheme } from 'utils/global.theme'

type Props = {
  theme: GlobalTheme
}

export const SpinnerContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SpinnerOverlay = styled.div`
  width: 20px;
  height: 20px;
  border: 3px solid ${(({ theme }: Props) => theme.secondaryColor)};
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 0.75s ease-in-out infinite;
  
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`
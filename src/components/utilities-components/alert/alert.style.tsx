import styled from 'styled-components'
import { SUCCESS_COLOR, DANGER_COLOR } from 'utils/colorConstants'
import { ReactComponent as WarningSVG } from 'layout/svg-repo/warning.svg'

interface Props {
  color: string
  margin?: string
}

const setAlertBackground = (color: string) => {
  switch (color) {
    case 'success':
      return SUCCESS_COLOR
    case 'danger':
      return DANGER_COLOR
    default:
      return SUCCESS_COLOR
  }
}

export const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props: Props) => setAlertBackground(props.color)};
  ${(({ margin }: Props) => margin && `margin: ${margin};`)}
  padding: 0.75rem 1rem;
  border-radius: 2px;

  @media screen and (max-width: 470px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const StyledWarningContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1rem;
  padding-left: 1rem;
`

export const StyledWarningText = styled.p`
  margin: 0;
  font-size: 0.92rem;
  font-weight: 500;
  color: #fff;
`

export const StyledWarningSVG = styled(WarningSVG)`
  fill: #fff;
  
  height: 25px;
  width: 25px;
  margin-right: 1.25rem;

  @media screen and (max-width: 470px) {
    margin-right: 1.5rem;
    height: 35px;
    width: 35px;
  }
`

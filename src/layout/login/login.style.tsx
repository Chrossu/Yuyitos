import styled from 'styled-components'

export const StyledFormContainer = styled.div`
  padding: 2rem;
  width: 40%;
  margin: 2rem auto;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  border-radius: 3px;
`

export const StyledTitle = styled.h1`
  color: #777;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 300;
  margin-bottom: 2rem;
`

export const StyledInputsContainer = styled.div`
  
`

export const StyledInputGroup = styled.div`
  position: relative;
  margin: 45px 0;

  &:first-child {
    margin: 1rem 0;
  } 
`

export const StyledInput = styled.input`
  background-color: #fff;
  color: #444;
  font-size: 18px;
  padding: 10px;
  padding-left: 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid grey;
  margin: 25px 0;


  &:valid, &:focus {
    outline: none;
    border-bottom: 1px solid grey;
    box-shadow: none;

    & ~ label {
      outline: none;
      top: -0.8rem;
      font-size: 14px;
      color: #49d3a9;
    }
  }
`

export const StyledLabel = styled.label`
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: all 0.4s ease;
  color: #666;
`
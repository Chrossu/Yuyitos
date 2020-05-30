import React from 'react'
import FlexContainer from '../flexContainer'

interface ContainerEmptyMsgProps {
  message?: string
}

const ContainerEmptyMsg: React.FC<ContainerEmptyMsgProps> = ({ message }) => {
  return (
    <FlexContainer padding='1rem' justifyContent='center' alignItems='center' width='100%'>
      {
        message ? <p>{message}</p> : <p>Sin información.</p>
      }
    </FlexContainer>
  )
}

export default ContainerEmptyMsg
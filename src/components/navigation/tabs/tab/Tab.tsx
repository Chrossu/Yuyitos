import React from 'react'

import { StyledTab } from './tab.style'

type ComponentProps = {
  label: string
  activeTab?: string
  onClick?: (label: string) => void
}

const Tab: React.FC<ComponentProps> = ({ activeTab, label, onClick }) => {
  const handleClick = () => {
    // onClick(label)
  }

  return (
    <StyledTab onClick={handleClick}>
      {label}
    </StyledTab>
  )
}

export default Tab
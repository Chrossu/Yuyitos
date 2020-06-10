import React, { useState } from 'react';

import { StyledTabsContainer, StyledTab } from './tabs.style'

const types = ['Cash', 'Credit Card', 'Bitcoin']

type ComponentProps = {
  components: any[]
}

const Tabs: React.FC<ComponentProps> = () => {
  const [active, setActive] = useState(types[0])

  return (
    <>
      <StyledTabsContainer>
        {
          types.map(type => (
            <StyledTab
              key={type}
              active={active === type}
              onClick={() => setActive(type)}
            >
              {type}
            </StyledTab>
          ))
        }
      </StyledTabsContainer>
      {active}
    </>
  )
}

export default Tabs
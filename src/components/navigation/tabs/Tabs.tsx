import React, { useState } from 'react';

import { StyledTabsContainer, StyledTab } from './tabs.style'

import { Tab } from 'types/generals'

type ComponentProps = {
  components: Tab[]
}

const Tabs: React.FC<ComponentProps> = ({ components }) => {
  const [activeTab, setActiveTab] = useState<Tab>(() => components[0])

  return (
    <>
      <StyledTabsContainer>
        {
          components.map((component: Tab) => (
            <StyledTab
              key={component.label}
              activeTab={activeTab.label === component.label}
              onClick={() => setActiveTab(component)}
            >
              {component.label}
            </StyledTab>
          ))
        }
      </StyledTabsContainer>
      {<activeTab.component />}
    </>
  )
}

export default Tabs
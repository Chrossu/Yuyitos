import React from 'react'

import Tab from '../tab'

type ComponentProps = {
  children: any[]
}

const Tabs: React.FC<ComponentProps> = ({ children }) => {
  // Set initial state
  const [activeTab, setActiveTab] = React.useState(children[0].props.label)

  const onClickTabItem = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <div className="tabs">
      <ul className="tab-list">
        {children.map((child) => {
          const { label } = child.props

          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={onClickTabItem}
            />
          )
        })}
      </ul>
      <div className="tab-content">
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined
          return child.props.children
        })}
      </div>
    </div>
  )
}

export default Tabs
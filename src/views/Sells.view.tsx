import React from 'react'
import { Tabs, Tab } from 'components/navigation'
import CreateSell from 'layout/sells'

interface ComponentProps {

}

const SellsView: React.FC<ComponentProps> = props => {
  return (
    <>
      {/* <h1>Ventas</h1>
      <Tabs>
        <Tab label='aer'>
          See ya later, <em>Alligator</em>!
      </Tab>
        <Tab label='aer2'>
          After 'while, <em>Crocodile</em>!
      </Tab>
        <Tab label='aer3'>
          Nothing to see here, this tab is <em>extinct</em>!
      </Tab>
      </Tabs> */}
      <CreateSell />
    </>
  )
}

export default SellsView
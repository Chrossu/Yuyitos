import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import { StyledSidebarContainer, StyledList, StyledLinkListItem, StyledListItemText } from './sidebar.style'

import { NAVBAR_ITEMS } from './sidebar.items'
import { AppState } from 'store/configureStore'
import { LIGHT, DARK } from 'utils/generalConstants'
import { setLightTheme, setDarkTheme } from 'store/actions/theme.actions'
import { Theme } from 'types/theme/Theme'

import Button from 'components/buttons/button/Button'

interface ComponentProps {
  theme: Theme
  setLightTheme: () => void
  setDarkTheme: () => void
}

const Sidebar: React.FC<ComponentProps> = ({ theme, setLightTheme, setDarkTheme }) => {
  const toggleTheme = () => {
    switch (theme) {
      case LIGHT:
        return setDarkTheme()
      case DARK:
        return setLightTheme()
    }
  }
  return (
    <StyledSidebarContainer>
      <StyledList>
        {
          NAVBAR_ITEMS.map(({ label, url, subItems, svg }) => (
            <Fragment key={url}>
              <StyledLinkListItem to={url}>
                {svg}
                <StyledListItemText>{label}</StyledListItemText>
              </StyledLinkListItem>
              {
                !!subItems && (
                  <StyledList>
                    {
                      subItems.map((subItem) => (
                        <StyledLinkListItem key={subItem.url} to={``}>
                          <StyledListItemText>
                            {subItem.label}
                          </StyledListItemText>
                        </StyledLinkListItem>
                      ))
                    }
                  </StyledList>
                )
              }
            </Fragment>
          ))
        }
      </StyledList>
      <Button color='primary' onClick={toggleTheme}>Pulsa para cambiar tema</Button>
    </StyledSidebarContainer>
  )
}

const mapStateToProps = (state: AppState) => ({
  theme: state.theme
})

export default connect(mapStateToProps, { setLightTheme, setDarkTheme })(Sidebar)
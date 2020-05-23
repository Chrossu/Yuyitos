import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { StyledSidebarContainer, StyledList, StyledLinkListItem, StyledListItemText } from './sidebar.style'
import { lightTheme, darkTheme } from './sidebar.theme'

import { NAVBAR_ITEMS } from './sidebar.items'
import { AppState } from 'store/configureStore'
import { LIGHT, DARK } from 'utils/constants'
import { setLightTheme, setDarkTheme } from 'store/actions/theme.actions'
import { Theme } from 'types/theme/Theme'

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
    <ThemeProvider theme={theme === LIGHT ? lightTheme : darkTheme}>
      <StyledSidebarContainer>
        <StyledList>
          {
            NAVBAR_ITEMS.map(({ label, name, subItems }) => (
              <Fragment key={name}>
                <StyledLinkListItem to={`2`}>
                  <StyledListItemText>{label}</StyledListItemText>
                </StyledLinkListItem>
                {
                  !!subItems && (
                    <StyledList>
                      {
                        subItems.map((subItem) => (
                          <StyledLinkListItem key={subItem.name} to={``}>
                            <StyledListItemText className="sidebar-item-text">
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
        <button onClick={toggleTheme}>Pulsa para cambiar tema</button>
      </StyledSidebarContainer>
    </ThemeProvider>
  )
}

const mapStateToProps = (state: AppState) => ({
  theme: state.theme
})

export default connect(mapStateToProps, { setLightTheme, setDarkTheme })(Sidebar)
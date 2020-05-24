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
    <ThemeProvider theme={theme === LIGHT ? lightTheme : darkTheme}>
      <StyledSidebarContainer>
        <StyledList>
          {
            NAVBAR_ITEMS.map(({ label, url, subItems }) => (
              <Fragment key={url}>
                <StyledLinkListItem to={url}>
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
        <Button onClick={toggleTheme}>Pulsa para cambiar tema</Button>
      </StyledSidebarContainer>
    </ThemeProvider>
  )
}

const mapStateToProps = (state: AppState) => ({
  theme: state.theme
})

export default connect(mapStateToProps, { setLightTheme, setDarkTheme })(Sidebar)
import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import { StyledSidebarContainer, StyledList, StyledLinkListItem, StyledListItemText } from './sidebar.style'

import { NAVBAR_ITEMS } from './sidebar.items'
import { AppState } from 'store/configureStore'
import { LIGHT, DARK } from 'utils/generalConstants'
import { setLightTheme, setDarkTheme } from 'store/actions/theme.actions'

import Button from 'components/buttons/button/Button'

import { Theme } from 'types/store/theme'

interface ComponentProps {
  theme: Theme
  isUser: boolean
  setLightTheme: () => void
  setDarkTheme: () => void
}

const Sidebar: React.FC<ComponentProps> = ({ theme, isUser, setLightTheme, setDarkTheme }) => {
  const toggleTheme = () => {
    switch (theme) {
      case LIGHT:
        return setDarkTheme()
      case DARK:
        return setLightTheme()
    }
  }
  if (isUser) return (
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
  else return null
}

const mapStateToProps = (state: AppState) => ({
  theme: state.theme
})

export default connect(mapStateToProps, { setLightTheme, setDarkTheme })(Sidebar)
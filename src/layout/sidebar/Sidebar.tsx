import React, { Fragment } from 'react'
import { connect, useSelector } from 'react-redux'
import { ReactComponent as PersonConnectionsSVG } from 'layout/svg-repo/person-connections.svg'
import { ReactComponent as StatsSVG } from 'layout/svg-repo/stats.svg'

import { StyledSidebarContainer, StyledList, StyledLinkListItem, StyledListItemText } from './sidebar.style'

import { NAVBAR_ITEMS } from './sidebar.items'
import { AppState } from 'store/configureStore'
import { LIGHT, DARK } from 'utils/generalConstants'
import { setLightTheme, setDarkTheme } from 'store/actions/theme.actions'

import Button from 'components/buttons/button/Button'

import { Theme } from 'types/store/theme'
import { SidebarItem } from 'layout/sidebar/sidebar.items'

interface ComponentProps {
  theme: Theme
  isUser: boolean
  setLightTheme: () => void
  setDarkTheme: () => void
}

const Sidebar: React.FC<ComponentProps> = ({ theme, isUser, setLightTheme, setDarkTheme }) => {
  const [navbarItems, setNavbarItems] = React.useState<SidebarItem[]>([])
  const user: any = useSelector((state: AppState) => state.user)

  React.useEffect(() => {
    let initialNavItems = NAVBAR_ITEMS

    if (!!user.id && user.user_kind.id == 1)
      initialNavItems = [
        ...NAVBAR_ITEMS,
        { url: '/proveedores', label: 'Proveedores', svg: <PersonConnectionsSVG /> },
        { url: '/estadisticas', label: 'Estadísticas', svg: <StatsSVG /> },]
    setNavbarItems(initialNavItems)
  }, [user])

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
          navbarItems.map(({ label, url, svg }) => (
            <Fragment key={url}>
              <StyledLinkListItem to={url}>
                {svg}
                <StyledListItemText>{label}</StyledListItemText>
              </StyledLinkListItem>
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
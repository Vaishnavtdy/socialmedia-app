import React from 'react'
import { MenuItems, Nav, SearchBar } from './NavBarStyled'
import { avatar, logo, iconBuzz, notification, search } from '../../assets/icons'

const NavBar = () => {
  return (
    <Nav>
        <img src={logo} alt="" width="40" height="40" />

        <SearchBar>
            <img src={search} alt="" />
            <input type="text" name="" id="" />
        </SearchBar>

        <MenuItems>
        <img src={iconBuzz} alt="" width="24" height="24" />
        <img src={notification} alt="" width="24" height="24" />
        <img src={avatar} alt="" width="36" height="36" />
        </MenuItems>
    </Nav>
  )
}

export default NavBar
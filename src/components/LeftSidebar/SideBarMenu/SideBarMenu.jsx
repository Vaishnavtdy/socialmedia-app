import React from 'react'
import { SideBarMenuContainer } from './SideBarMenuStyled'
import { help, home, members, privacy, profile, settings, wallet } from '../../../assets/icons'

const SideBarMenu = () => {
  return (
    <SideBarMenuContainer>
        <img src={home} alt="" width="32" height="32" />
        <img src={members} alt="" width="32" height="32" />
        <img src={wallet} alt="" width="32" height="32" />
        <img src={profile} alt="" width="32" height="32" />
        <img src={help} alt="" width="32" height="32" />
        <img src={privacy} alt="" width="32" height="32" />
        <img src={settings} alt="" width="32" height="32" />
    </SideBarMenuContainer>
  )
}

export default SideBarMenu
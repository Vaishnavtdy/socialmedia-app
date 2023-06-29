import React from 'react'
import { IconGroup, UserEngagementContainer } from './UserEngagementStyled'
import { icon_boost, icon_comment, icon_happy_active, icon_share } from '../../../assets/icons'

const UserEngagement = () => {
  return (
    <UserEngagementContainer>
        <IconGroup>
            <img src={icon_happy_active} alt="" width={'24'} height={'24'} />
            <span>Happy</span>
        </IconGroup>

        <IconGroup>
            <img src={icon_comment} alt="" width={'24'} height={'24'} />
            <span>Comment</span>
        </IconGroup>

        <IconGroup>
            <img src={icon_share} alt="" width={'24'} height={'24'} />
            <span>Share</span>
        </IconGroup>

        <IconGroup>
            <img src={icon_boost} alt="" width={'24'} height={'24'} />
            <span>Boost</span>
        </IconGroup>
    </UserEngagementContainer>
  )
}

export default UserEngagement
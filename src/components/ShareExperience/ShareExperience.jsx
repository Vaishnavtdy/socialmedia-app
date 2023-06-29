import React from 'react'
import { ExpericeContainer } from './ShareExperienceStyled'
import { my_avatar } from '../../assets/images'
import { icon_image, icon_video } from '../../assets/icons'

const ShareExperience = () => {
  return (
    <ExpericeContainer>
        <img src={my_avatar} alt="" width={'36'} height={'36'} />
        <input type="text" placeholder='Share your best experiences' />
        <img src={icon_image} alt="" width={'36'} height={'36'} />
        <img src={icon_video} alt="" width={'24'} height={'24'} />
    </ExpericeContainer>
  )
}

export default ShareExperience
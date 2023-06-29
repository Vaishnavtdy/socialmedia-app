import React from 'react'
import { CountContainer, CountGroup } from './LikeCountsStyled'
import { icon_comment, icon_happy, icon_share } from '../../../assets/icons'

const LikeCounts = ({likes, comments, shares}) => {
  return (
    <CountContainer>
        <CountGroup>
            <img src={icon_happy} alt="" width={'16'} height={'16'} />
            <span>{likes}</span>
        </CountGroup>

        <CountGroup>
            <img src={icon_comment} alt="" width={'16'} height={'16'} />
            <span>{comments}</span>
        </CountGroup>

        <CountGroup>
            <img src={icon_share} alt="" width={'16'} height={'16'} />
            <span>{shares}</span>
        </CountGroup>

    </CountContainer>
  )
}

export default LikeCounts
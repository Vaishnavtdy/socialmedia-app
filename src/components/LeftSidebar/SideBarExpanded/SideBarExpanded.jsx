import React from 'react'
import { BottomSection, ExpandedContainer, Items, Line, Row, TopSection } from './SideBarExpandedStyled'
import Button from '../../../constants/Button/Button'
import { my_avatar } from '../../../assets/images'

function SideBarExpanded() {
  return (
    <ExpandedContainer>
      <TopSection>
        <img src={my_avatar} alt="" />
        <h5>Andrea William</h5>
        <h6>@andrea</h6>
        <p>London, UK</p>
        <Button text="Verify your account" />
      </TopSection>

      <BottomSection>
        <Row shadow>
          <Items>
            <p>Total Earnings</p>
            <h5>£24640</h5>
          </Items>

          <Items secondary>
            <p>Total Reactions</p>
            <h5>6520</h5>
          </Items>
        </Row>
        <Line></Line>
        <Row>
          <Items>
            <p>Today Earnings</p>
            <h5>£475</h5>
          </Items>

          <Items secondary>
            <p>New Reactions</p>
            <h5>238</h5>
          </Items>
        </Row>
      </BottomSection>
    </ExpandedContainer>
  )
}

export default SideBarExpanded
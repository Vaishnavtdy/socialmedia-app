import React from "react";
import {
  ButtonContainer,
  CardContainer,
  DetailsContainer,
  NameContainer,
  Time,
} from "./ConnectionsCardStyled";
import Button from "../Button/Button";

function ConnectionsCard(props) {
  console.log("props", props);
  const { name, userName, status, image, time } = props.details;
  return (
    <CardContainer>
      <img src={image} alt="avatar1" width={36} height={36} />
      <DetailsContainer>
        <NameContainer>
          <h6>{name}</h6>
          <span>{userName}</span>
        </NameContainer>
        {props?.recentReq && <Time>{time}</Time>}
        { status == 0 || status == 2 ?
          <ButtonContainer>
            <Button text={"Connect"} secondary={false} small={true}/>
            <Button text={status == 0 ? "Follow" : "Following"} secondary={true} small={true} />
          </ButtonContainer>
          : <ButtonContainer>
            <p>Request Send</p> <span>Cancel</span>
          </ButtonContainer>
        }
      </DetailsContainer>
    </CardContainer>
  );
}

export default ConnectionsCard;

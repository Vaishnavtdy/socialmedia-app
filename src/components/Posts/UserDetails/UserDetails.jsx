import React from "react";
import {
  DetailsContainer,
  Location,
  Name,
  UserDetailsContainer,
  UserDetailsRow,
  UserName,
} from "./UserDetailsStyled";
import { miriam } from "../../../assets/images/Story";
import { icon_lock } from "../../../assets/icons";

const UserDetails = ({ name, userName, location }) => {
  return (
    <UserDetailsContainer>
      <img src={miriam} alt="" width={"36"} height={"36"} />
      <UserDetailsRow>
        <DetailsContainer>
          <Name>{name} &nbsp;</Name>
          <UserName>{userName} &nbsp;</UserName>
          {location && (
            <Location>
              is at&nbsp;<strong>{location}</strong>
            </Location>
          )}
        </DetailsContainer>

        <DetailsContainer>
          <UserName>5 m</UserName>
          <img
            src={icon_lock}
            alt=""
            width={"16"}
            height={"16"}
            style={{ marginLeft: "8px" }}
          />
        </DetailsContainer>
      </UserDetailsRow>
    </UserDetailsContainer>
  );
};

export default UserDetails;

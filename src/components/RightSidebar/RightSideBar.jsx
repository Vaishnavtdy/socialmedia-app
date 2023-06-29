import React from "react";
import {
  RightSideBarContainer,
  RightSideHeadingContainer,
} from "./RightSideBarStyled";
import ConnectionsCard from "../../constants/ConnectionsCard/ConnectionsCard";
import { RecentRequests, TobeFollowed } from "../../constants/Details";

const RightSideBar = () => {
  return (
    <RightSideBarContainer>
      {/*----- To be followed section --- */}
      <RightSideHeadingContainer>
        <h5>To be followed</h5>
        <span>See all</span>
      </RightSideHeadingContainer>

      {TobeFollowed.map((item) => (
        <ConnectionsCard details={item} />
      ))}

      {/* ------Recent Requests ------- */}
      <br />
      <br />
      <br />
      <RightSideHeadingContainer>
        <h5>Recent Requests</h5>
        <span>See all</span>
      </RightSideHeadingContainer>

      {RecentRequests.map((item) => (
        <ConnectionsCard details={item} recentReq={true} />
      ))}
    </RightSideBarContainer>
  );
};

export default RightSideBar;

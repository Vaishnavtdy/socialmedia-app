import React from "react";
import { Story, StoryContainer, StoryGroup } from "./StoriesStyled";
import { arrow_left, arrow_right } from "../../assets/icons";
import { my_moment } from "../../assets/images/Story";
import { StoryDetails } from "../../constants/Details";

const Stories = () => {
  return (
    <StoryContainer>
      <img src={arrow_left} alt="" width={"24"} height={"24"} />
      <Story>
        <StoryGroup>
          <img src={my_moment} alt="" width={"50"} height={"50"} />
          <span style={{fontWeight:700}}>My Moment</span>
        </StoryGroup>
        {StoryDetails?.map((item) => (
          <StoryGroup>
            <img src={item?.image} alt="" width={"50"} height={"50"} />
            <span>{item?.name}</span>
          </StoryGroup>
        ))}
      </Story>
      <img src={arrow_right} alt="" width={"24"} height={"24"} />
    </StoryContainer>
  );
};

export default Stories;

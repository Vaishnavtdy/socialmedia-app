import React from "react";
import {
  ImageContainer,
  Line,
  MoreSection,
  PostContainer,
  PostParagraph,
  PostTopSection,
} from "./PostsStyled";
import UserDetails from "./UserDetails/UserDetails";
import { icon_more } from "../../assets/icons";
import LikeCounts from "./LikeCounts/LikeCounts";
import UserEngagement from "./UserEngagement/UserEngagement";
import { flower } from "../../assets/images";

const Posts = ({ details }) => {
  let { name, userName, location, content, image, likes, comments, shares } =
    details;
  return (
    <PostContainer>
      <PostTopSection>
        <UserDetails name={name} userName={userName} location={location} />
        <MoreSection>
          <img src={icon_more} alt="" width={"24"} height={"24"} />
        </MoreSection>
      </PostTopSection>

      <PostParagraph>
        {content}
      </PostParagraph>

      {image && <ImageContainer src={image} />}

      <LikeCounts likes={likes} comments={comments} shares={shares} />
      {/* <hr /> */}
      <Line />
      <UserEngagement />
    </PostContainer>
  );
};

export default Posts;

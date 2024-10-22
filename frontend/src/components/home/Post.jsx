import React from "react";
import styled from "styled-components";
import { IoBookmarkOutline } from "react-icons/io5";
import postImg from "../../assets/post/1.jpeg";
import userImg from "../../assets/person/1.jpeg";
import heartImg from "../../assets/heart.png";
import likeImg from "../../assets/like.png";

const Post = () => {
  return (
    <PostContainer>
      <PostWrapper>
        <PostTop>
          <div className="postTopLeft">
            <img className="postProfileImg" src={userImg} alt="" />
            <span className="postAuthorname">Tanay Pratap</span>
            <span className="postUsername">@tanaypratap</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <IoBookmarkOutline size={25} />
          </div>
        </PostTop>
        <PostCenter>
          <span className="postText">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis,
            eius.
          </span>
          <img className="postImage" src={postImg} alt="Post" />
        </PostCenter>
        <PostBottom>
          <div className="postBottomLeft">
            <img src={likeImg} alt="" className="likeIcon" />
            <img src={heartImg} alt="" className="likeIcon" />
            <span className="postLikeCounter">32 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </PostBottom>
      </PostWrapper>
    </PostContainer>
  );
};

export default Post;

const PostContainer = styled.div`
  width: 100%;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  margin: 1rem 0;
  background-color: #fff;
`;

const PostWrapper = styled.div`
  padding: 10px;
`;

const PostTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .postTopLeft {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .postProfileImg {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
  }

  .postAuthorname {
    font-size: 15px;
    font-weight: 500;
  }

  .postUsername {
    color: var(--grey-muted);
  }

  .postDate {
    font-size: 14px;
    color: var(--grey-muted);
  }
`;

const PostCenter = styled.div`
  margin: 20px 0;

  .postImage {
    margin-top: 20px;
    width: 100%;
    max-height: 500px;
    object-fit: contain;
  }
`;

const PostBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .postBottomLeft {
    display: flex;
    align-items: center;
  }

  .likeIcon {
    width: 24px;
    height: 24px;
    margin-right: 5px;
    cursor: pointer;
  }

  .postLikeCounter {
    font-size: 15px;
  }

  .postCommentText {
    cursor: pointer;
    border-bottom: 1px dashed gray;
    font-size: 15px;
  }
`;

import React from "react";
import styled from "styled-components";
import { MdOutlinePermMedia } from "react-icons/md";
import { BsFiletypeGif } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import userImg from "../../assets/person/1.jpeg";

const Share = () => {
  return (
    <ShareContainer>
      <ShareWrapper>
        <div className="d-flex align-items-center">
          <ShareProfileImage src={userImg} alt="" />
          <ShareInput
            type="text"
            className="form-control"
            placeholder="Write something interesting..."
          />
        </div>
        <ShareHr />
        <ShareBottom>
          <ShareOptions>
            <ShareOption>
              <MdOutlinePermMedia className="shareIcon" />
            </ShareOption>
            <ShareOption>
              <BsFiletypeGif className="shareIcon" />
            </ShareOption>
            <ShareOption>
              <BsEmojiSmile className="shareIcon" />
            </ShareOption>
          </ShareOptions>
          <button className="btn btn-primary rounded-0 me-3">Post</button>
        </ShareBottom>
      </ShareWrapper>
    </ShareContainer>
  );
};

export default Share;

// Styled-components for the Share component
const ShareContainer = styled.div`
  width: 100%;
  height: 170px;
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  background-color: #fff;
`;

const ShareWrapper = styled.div`
  padding: 10px;
`;

const ShareProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const ShareInput = styled.input`
  border: none;
  width: 90%;
  height: 5rem;
  background-color: var(--bg-grey-lightest);
`;

const ShareHr = styled.hr`
  margin: 15px;
`;

export const ShareBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ShareOptions = styled.div`
  display: flex;
  margin-left: 20px;
`;

export const ShareOption = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;

  .shareIcon {
    font-size: 21px !important;
    margin-right: 3px;
  }
`;

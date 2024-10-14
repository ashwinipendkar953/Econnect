import React, { useEffect } from "react";
import styled from "styled-components";
import { Modal } from "bootstrap";
import { FaCircleUser } from "react-icons/fa6";
import { ShareOption, ShareOptions } from "./home/Share";
import { MdOutlinePermMedia } from "react-icons/md";
import { BsFiletypeGif } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import {
  UserDetails,
  UserHandle,
  UserIcon,
  UserName,
  UserSection,
} from "./Rightbar";

const CreatePostModal = () => {
  useEffect(() => {
    const modalElement = document.getElementById("createPostModal");
    const modal = new Modal(modalElement);
    return () => modal.dispose();
  }, []);

  return (
    <PostModal
      className="modal fade"
      id="createPostModal"
      tabIndex="-1"
      aria-labelledby="createPostModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <button
            type="button"
            className="btn-close position-absolute"
            data-bs-dismiss="modal"
            aria-label="Close"
            style={{ top: "1rem", right: "1rem" }}
          ></button>
          <ModalBody>
            <ModalTop>
              <UserSection>
                <UserIcon className="userIcon">
                  <FaCircleUser />
                </UserIcon>
                <UserDetails>
                  <UserName>Tanay Pratap</UserName>
                  <UserHandle>@tanayPratap</UserHandle>
                </UserDetails>
              </UserSection>
            </ModalTop>
            <PostTextarea
              className="form-control"
              rows="10"
              placeholder="What do you want to talk about?"
            ></PostTextarea>
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
          </ModalBody>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary rounded-0">
              Submit
            </button>
          </div>
        </div>
      </div>
    </PostModal>
  );
};

export default CreatePostModal;

const PostModal = styled.div`
  margin-top: 3rem;

  .modal-dialog {
    max-width: 700px;
  }

  .modal-header {
    border-bottom: 0;
  }

  .userIcon {
    font-size: 45px;
  }
`;

const ModalBody = styled.div`
  padding: 15px;
`;

const ModalTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const PostTextarea = styled.textarea`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  resize: none;
  border: 0;
  font-size: 20px;
`;

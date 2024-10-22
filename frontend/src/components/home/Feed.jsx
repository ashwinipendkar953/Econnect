import styled from "styled-components";
import Share from "./Share";
import Post from "./Post";
import { IoFilterOutline } from "react-icons/io5";

const Feed = () => {
  return (
    <div>
      <div className="feedWrapper">
        <Share />
        <PostHeader>
          <h3>Latest Post</h3>
          <button className="btn pb-0">
            <IoFilterOutline size={25} />
          </button>
        </PostHeader>
        <Post />
      </div>
    </div>
  );
};

export default Feed;

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

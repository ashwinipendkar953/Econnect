import styled from "styled-components";
import Post from "../components/home/Post";

const Bookmark = () => {
  return (
    <BookMarkDiv>
      <h3>Your Bookmarks</h3>
      <Post />
    </BookMarkDiv>
  );
};

export default Bookmark;

const BookMarkDiv = styled.div`
  h3 {
    font-weight: 700;
  }
`;

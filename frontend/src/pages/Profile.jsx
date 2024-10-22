import styled from "styled-components";
import { ProfileTop } from "../components";
import Post from "../components/home/Post";

const Profile = () => {
  return (
    <div>
      <ProfileTop />
      <ProfileBottom>
        <h3>Your Posts</h3>
        <Post />
      </ProfileBottom>
    </div>
  );
};

export default Profile;

const ProfileBottom = styled.div`
  padding-top: 20px;
  padding-bottom: 10px;
`;

import styled from "styled-components";

const ProfileTop = () => {
  return (
    <ProfileTopWrapper>
      <ProfileImage src="/assets/person/1.jpeg" alt="Profile" />
      <UserInfo>
        <span className="postAuthorname">Tanay Pratap</span>
        <span className="postUsername">@tanaypratap</span>
        <button className="btn fw-semibold">Edit Profile</button>
      </UserInfo>
      <UserBio>
        Senior Software Engineer @Microsoft | Creator of India’s biggest
        programming community | Tweets about JavaScript, ReactJS, Career, and
        Startups
      </UserBio>
      <UserEmail>tanaypratap.com</UserEmail>
      <UserStats>
        <div>
          <span className="fw-bold">2K</span>
          <p className="fw-semibold">Following</p>
        </div>
        <div>
          <span className="fw-bold">37.3K</span>
          <p className="fw-semibold">Followers</p>
        </div>
        <div>
          <span className="fw-bold">Posts</span>
          <p className="fw-semibold">37.3K</p>
        </div>
      </UserStats>
    </ProfileTopWrapper>
  );
};

export default ProfileTop;

const ProfileTopWrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;

  .postAuthorname {
    font-size: 1.5rem;
    font-weight: 700;
  }

  .postUsername {
    font-size: 1.1rem;
    color: var(--grey-muted);
  }

  .btn {
    margin: 10px 0;
    border-radius: 0;
    border: 2px solid var(--bs-primary);
  }
`;

const UserBio = styled.div`
  font-size: 17px;
`;

const UserEmail = styled.p`
  color: var(--bs-primary);
  font-size: 17px;
`;

const UserStats = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  font-size: 17px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

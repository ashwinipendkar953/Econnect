import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

const Rightbar = () => {
  return (
    <RightbarContainer>
      <RightbarWrapper>
        <FollowContainer>
          <FollowTop>
            <span className="fw-bold">Who to Follow?</span>
            <Link className="link fw-semibold">Show More</Link>
          </FollowTop>
          <hr className="m-0 p-0" />
          <FollowBottom>
            <FollowUser>
              <UserSection>
                <UserIcon>
                  <FaCircleUser />
                </UserIcon>
                <UserDetails>
                  <UserName>Tanay Pratap</UserName>
                  <UserHandle>@tanayPratap</UserHandle>
                </UserDetails>
              </UserSection>
              <UserFollow>
                <span className="followText">Follow</span>
                <FaPlus className="followIcon" />
              </UserFollow>
            </FollowUser>

            <FollowUser>
              <UserSection>
                <UserIcon>
                  <FaCircleUser />
                </UserIcon>
                <UserDetails>
                  <UserName>Tanay Pratap</UserName>
                  <UserHandle>@tanayPratap</UserHandle>
                </UserDetails>
              </UserSection>
              <UserFollow>
                <span className="followText">Follow</span>
                <FaPlus className="followIcon" />
              </UserFollow>
            </FollowUser>
          </FollowBottom>
        </FollowContainer>
      </RightbarWrapper>
    </RightbarContainer>
  );
};

export default Rightbar;

const RightbarContainer = styled.div`
  flex: 3;
  margin-top: 2.5rem;
`;

const RightbarWrapper = styled.div`
  /* padding: 20px 20px 0 0; */
`;

const FollowContainer = styled.div`
  width: 100%;
  background-color: #fff;
`;

const FollowTop = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .link {
    font-size: 17px;
  }
`;

const FollowBottom = styled.div`
  padding: 1rem;
`;

const FollowUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserSection = styled.div`
  margin-bottom: 1rem;
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: center;
`;

export const UserIcon = styled.div`
  font-size: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.p`
  margin-bottom: 0;
  font-weight: bold;
  font-size: 1rem;
`;

export const UserHandle = styled.p`
  margin-bottom: 0;
  font-size: 1rem;
  color: var(--grey-muted);
`;

const UserFollow = styled.div`
  display: flex;
  align-items: center;

  .followText {
    font-weight: 500;
    color: var(--bs-primary);
    margin-right: 2px;
  }

  .followIcon {
    color: var(--bs-primary);
    opacity: 0.5;
  }
`;

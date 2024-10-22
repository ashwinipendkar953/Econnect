import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { IoHomeOutline } from "react-icons/io5";
import { BsRocket } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";

const LeftSidebar = ({ onOpenModal }) => {
  return (
    <SidebarContainer className="position-relative">
      <SidebarWrapper>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavItem to="/" activeClassName="active">
              <IconWrapper>
                <IoHomeOutline />
              </IconWrapper>
              <div>Home</div>
            </NavItem>
          </li>

          <li className="nav-item">
            <NavItem to="/explore" activeClassName="active">
              <IconWrapper>
                <BsRocket />
              </IconWrapper>
              <div>Explore</div>
            </NavItem>
          </li>

          <li className="nav-item">
            <NavItem to="/bookmark" activeClassName="active">
              <IconWrapper>
                <CiBookmark />
              </IconWrapper>
              <div>Bookmark</div>
            </NavItem>
          </li>

          <li className="nav-item">
            <NavItem to="/profile" activeClassName="active">
              <IconWrapper>
                <FaRegUser />
              </IconWrapper>
              <div>Profile</div>
            </NavItem>
          </li>
        </ul>

        <CreatePostButton
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#createPostModal"
        >
          Create New Post
        </CreatePostButton>

        <UserSection>
          <UserIcon>
            <FaCircleUser />
          </UserIcon>
          <UserDetails>
            <UserName>Tanay Pratap</UserName>
            <UserHandle>@tanayPratap</UserHandle>
          </UserDetails>
        </UserSection>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default LeftSidebar;

const SidebarContainer = styled.div`
  flex: 3;
  max-height: calc(100vh - 125px);
  background: #fff;
  margin-top: 2.5rem;
`;

const SidebarWrapper = styled.div`
  padding: 20px;
`;

const IconWrapper = styled.div`
  font-size: 1.3rem;
  margin-right: 10px;
`;

const NavItem = styled(NavLink)`
  text-decoration: none;
  display: flex;
  justify-content: start;
  align-items: center;
  font-weight: 500;
  font-size: 1.1rem;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 0.5rem;

  &.active {
    font-weight: bold !important;
    color: var(--bs-primary) !important;
    font-size: 1.2rem !important;
  }
`;

const CreatePostButton = styled.button`
  padding: 0.7rem 0;
  width: 100%;
  margin: 1.5rem 0;
  background-color: #0d6efd;
  color: white;
  border: none;
  border-radius: 0;
  cursor: pointer;
  text-transform: capitalize;
`;

const UserSection = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: 1rem;
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: center;
`;

const UserIcon = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.p`
  margin-bottom: 0;
  font-weight: bold;
  font-size: 1.1rem;
`;

const UserHandle = styled.p`
  margin-bottom: 0;
  font-size: 1.1rem;
  color: var(--grey-muted);
`;

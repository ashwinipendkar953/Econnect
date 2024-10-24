import { Outlet, Navigate, useLocation } from "react-router-dom";
import { LeftSidebar, Header, Rightbar } from "./index";
import styled from "styled-components";
import CreatePostModal from "./CreatePostModal";
import { useSelector } from "react-redux";
import LoadingSpinner from "./LoadingSpinner";

const Layout = () => {
  const location = useLocation();
  const { token, isLoading } = useSelector((state) => state.auth);

  if (isLoading) return <LoadingSpinner />;

  return token ? (
    <BodyContainer>
      <Header />
      <MainContainer className="container-fluid">
        <LeftSidebar />
        <MainWrapper>
          <Outlet />
          <CreatePostModal />
        </MainWrapper>
        <Rightbar />
      </MainContainer>
    </BodyContainer>
  ) : (
    <Navigate to="/welcome" state={{ from: location }} replace />
  );
};

const BodyContainer = styled.div`
  padding-top: 50px !important;
  background-color: var(--bg-grey-lightest) !important;
  min-height: calc(100vh - 50px);
  overflow: auto;
`;

const MainContainer = styled.div`
  display: flex;
  padding-right: 32px;
  padding-left: 32px;
`;

const MainWrapper = styled.div`
  flex: 6;
  margin: 2.5rem 2rem 1rem;
`;

export default Layout;

import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { MdRssFeed } from "react-icons/md";
import { RiLogoutCircleRFill } from "react-icons/ri";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer className="position-fixed top-0 w-100 shadow-sm bg-white">
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid ">
          <Link className="navbar-brand text-primary fw-bold" to="/">
            Econnect
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse d-lg-flex justify-content-end align-items-center "
            id="navbarSupportedContent"
          >
            {/* search query div */}
            <div className="search-box col-md-6 col-12  position-relative">
              <form className="d-flex" role="search">
                <div className="position-absolute ms-2 fs-4 ">
                  <IoSearch className="searchIcon" />
                </div>
                <SearchInput
                  className="form-control me-2 border d-md-flex flex-wrap"
                  type="search"
                  placeholder="Search for friend, post or video"
                  aria-label="Search"
                  // onChange={handleSearch}
                />
              </form>
            </div>

            <ProfileDropdown className=" ms-2">
              <Link
                className="nav-link btn "
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {/* {user?.profilePic ? (
              <img
                className="img-fluid rounded-circle user-profile"
                src={user?.profilePic}
                alt={user?.name}
                style={{ width: "40px", height: "40px" }}
              />
            ) : ( */}
                <FaCircleUser size={30} className="customIcon" /> {/* )} */}
              </Link>
              <DropdownMenu className="dropdown-menu">
                <li className="border-bottom">
                  <DropdownItem to="/bookmark">
                    <div className="me-1 ">
                      <FaBookmark className="customIcon" />
                    </div>
                    <p className=" mb-0">BookMark</p>
                  </DropdownItem>
                </li>

                <li className="border-bottom">
                  <DropdownItem to="/posts">
                    <div className="me-1 ">
                      <MdRssFeed className="customIcon" />
                    </div>
                    <p className=" mb-0">Posts</p>
                  </DropdownItem>
                </li>

                <li>
                  <DropdownItem
                    type="button"
                    to="./logout"
                    // onClick={handleLogout}
                  >
                    <div className="me-1 ">
                      <RiLogoutCircleRFill className="customIcon" />
                    </div>
                    <p className=" mb-0">Logout</p>
                  </DropdownItem>
                </li>
              </DropdownMenu>
            </ProfileDropdown>
          </div>
        </div>
      </nav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  height: 50px;
  box-shadow: 0px 2px 10px 0px silver;
  z-index: 9999 !important;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;

  .container-fluid {
    padding-right: 32px;
    padding-left: 32px;
  }

  .navbar-toggler {
    font-size: 1rem !important;
    margin-top: 6px;
  }

  .navbar-brand {
    font-size: 1.6rem !important;
    padding: 0;
  }

  .searchIcon {
    margin-bottom: 5px;
  }

  .customIcon {
    font-size: 1.5rem;
    color: var(--bs-primary);
    margin-right: 0.5rem;
  }

  @media (max-width: 991.98px) {
    .search-box {
      padding: 20px 0;
    }

    .searchIcon {
      margin-top: 6px;
    }
  }

  @media (min-width: 577px) and (max-width: 768px) {
    .navbar .navbar-brand {
      font-size: 1.5rem !important;
    }
  }

  @media (max-width: 576px) {
    .navbar {
      padding-left: 1rem !important;
      padding-top: 7px !important;
      display: flex;
      justify-content: start;
      align-items: center;
    }

    .navbar .navbar-brand {
      font-size: 1.3rem !important;
    }
  }
`;

const SearchInput = styled.input`
  padding: 10px 30px 10px 40px;
  outline: none;
  width: 600px;
  max-width: 600px;
  height: 40px;
  border: none;
  border: 1px solid silver;
  border-radius: 5px;
  background-color: #edf3f8;
  display: flex;
  flex-wrap: wrap;
`;

const ProfileDropdown = styled.div`
  position: relative;
  display: inline-block;

  &:hover .dropdown-menu {
    display: block;
  }

  @media (max-width: 991.98px) {
    .user-profile {
      max-width: 100px !important;
    }
  }
`;

const DropdownMenu = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1000;
  min-width: 200px;
  background-color: white;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  margin-top: 0.5rem;

  @media (max-width: 991.98px) {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    min-width: 200px;
    background-color: white;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
`;

const DropdownItem = styled(Link)`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px 20px;
  font-size: 1rem;
  color: black;
  text-decoration: none;

  &:hover {
    background-color: #f0f0f0;
  }

  .customIcon {
    font-size: 1.5rem;
    color: var(--bs-primary);
    margin-right: 0.5rem;
  }
`;

import styled from "styled-components";

const ExploreTop = () => {
  const EXPLORE_FILTERS_OPTIONS = [
    { label: "For You", value: "forYou" },
    { label: "Trending", value: "trending" },
    { label: "Technology", value: "technology" },
    { label: "Sports", value: "sports" },
    { label: "News", value: "Value" },
  ];
  let activeFilter = "read";
  return (
    <ExploreTopWrapper>
      <h3>Explore</h3>
      <FiltersWrapper>
        {EXPLORE_FILTERS_OPTIONS.map((option, index) => {
          return (
            <FilterButton
              key={index}
              className={`btn fw-semibold filter-btn ${
                activeFilter === "unread" ? "active" : ""
              }`}
            >
              {option.label}
            </FilterButton>
          );
        })}
      </FiltersWrapper>
    </ExploreTopWrapper>
  );
};

export default ExploreTop;

const ExploreTopWrapper = styled.div`
  h3 {
    font-weight: 700;
  }
`;

const FiltersWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  border: 1px solid var(--border-color);
  border-radius: 0;
  color: var(--grey-muted);

  &:hover,
  &:active,
  &.active {
    color: #fff;
    background-color: var(--bs-primary);
    border: 1px solid var(--bs-primary);
  }
`;

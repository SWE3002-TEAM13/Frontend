import {
  StyledSearch,
  SearchContainer,
  SearchIconContainer,
  SearchButton,
} from "./styles";
import SearchIcon from "../../../assets/search.svg";

function Search() {
  return (
    <StyledSearch>
      <SearchContainer placeholder="검색해주세요"></SearchContainer>
      <SearchButton>
        <SearchIconContainer
          src={SearchIcon}
          alt="search"
        ></SearchIconContainer>
      </SearchButton>
    </StyledSearch>
  );
}

export default Search;

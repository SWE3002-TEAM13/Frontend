import { StyledSearch, SearchContainer, SearchIconContainer } from "./styles";
import SearchIcon from "../../../assets/search.svg";

function Search() {
  return (
    <StyledSearch>
      <SearchContainer placeholder="검색해주세요"></SearchContainer>
      <SearchIconContainer src={SearchIcon} alt="search"></SearchIconContainer>
    </StyledSearch>
  );
}

export default Search;

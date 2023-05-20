import {
  StyledSearch,
  SearchContainer,
  SearchIconContainer,
  SearchButton,
} from "./styles";
import SearchIcon from "../../../assets/search.svg";
import { useState } from "react";

function Search(props) {
  const [input, setInput] = useState(null);

  // search input에 문자 입력시 실행
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setValue(input);
  };

  // enter or search icon 버튼 클릭시 발생하는 이벤트 함수
  return (
    <StyledSearch onSubmit={handleSubmit}>
      <SearchContainer
        placeholder="검색해주세요"
        onChange={handleChange}
      ></SearchContainer>
      <SearchButton type="submit">
        <SearchIconContainer
          src={SearchIcon}
          alt="search"
        ></SearchIconContainer>
      </SearchButton>
    </StyledSearch>
  );
}

export default Search;

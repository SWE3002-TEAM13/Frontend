import Title from "../common/Title";
import Search from "../common/Search";
import Button from "../common/button";
import { SearchBoxContainer } from "./styles";
function SearchBox() {
  return (
    <SearchBoxContainer>
      <Title></Title>
      <Search></Search>
      <Button></Button>
    </SearchBoxContainer>
  );
}

export default SearchBox;

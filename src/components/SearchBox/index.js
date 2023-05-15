import Title from "../common/Title";
import Search from "../common/Search";
import Button from "../common/PostButton";
import { SearchBoxContainer } from "./styles";
import { useNavigate } from "react-router-dom";

function SearchBox(props) {
  const movePage = useNavigate();
  const handleClickPostButton = (e) => {
    movePage("/post");
    console.log(e.target.value);
  };
  return (
    <SearchBoxContainer>
      <Title text1={props.text1} text2={props.text2}></Title>
      <Search setValue={props.setValue}></Search>
      <Button
        type="button"
        value={props.value}
        className="basic"
        text="POST +"
        onClick={handleClickPostButton}
      ></Button>
    </SearchBoxContainer>
  );
}

export default SearchBox;

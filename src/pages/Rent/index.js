import axios from "axios";
import CardList from "../../components/CardList";
import SearchBox from "../../components/SearchBox";
import BasicLayout from "../../components/common/BasicLayout";
import { useEffect, useState } from "react";

function RentPage() {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_ENDPOINT}/post`, {
        withCredentials: true,
        params: {
          type: "rent",
          search: search,
        },
      })
      .then(function (response) {
        setCards(response.data);
        console.log(response);
      })
      .catch(function (error) {
        alert("검색 결과가 존재하지 않습니다.");
        console.log(error);
      });
  }, [search]);

  return (
    <BasicLayout
      children={
        <>
          <SearchBox
            text1="대여:"
            text2="합니다"
            value="rent"
            setValue={setSearch}
          />
          <CardList data={cards} />
        </>
      }
    ></BasicLayout>
  );
}

export default RentPage;

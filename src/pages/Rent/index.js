import axios from "axios";
import CardList from "../../components/CardList";
import SearchBox from "../../components/SearchBox";
import BasicLayout from "../../components/common/BasicLayout";
import { useEffect, useState } from "react";

function RentPage() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/post", {
        withCredentials: true,
        params: {
          type: "lend",
          search: null,
        },
      })
      .then(function (response) {
        setCards(response.data);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  console.log(Array.isArray(cards));
  console.log(cards);

  const onSearch = (e) => {};
  return (
    <BasicLayout
      children={
        <>
          <SearchBox
            text1="대여:"
            text2="합니다"
            value="rent"
            onClick={onSearch}
          />
          <CardList data={cards} />
        </>
      }
    ></BasicLayout>
  );
}

export default RentPage;

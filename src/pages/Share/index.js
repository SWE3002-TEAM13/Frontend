import CardList from "../../components/CardList";
import SearchBox from "../../components/SearchBox";
import BasicLayout from "../../components/common/BasicLayout";
import { useEffect, useState } from "react";
import { commonAxios } from "../../utils/commonAxios";
import { getCookie } from "../../utils/getCookie";

function SharePage() {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState(null);
  const [like, setLike] = useState();

  useEffect(() => {
    commonAxios
      .get(`/post`, {
        params: {
          type: "share",
          search: search,
        },
        headers: {
          Authorization: `Bearer ${getCookie("access_token")}`,
        },
      })
      .then((res) => {
        setCards(res.data);
        console.log(res);
      })
      .catch((err) => {
        alert("검색 결과가 존재하지 않습니다.");
        console.log(err);
      });
  }, [search, like]);

  return (
    <BasicLayout
      children={
        <>
          <SearchBox
            text1="나눔:"
            text2="합시다"
            value="share"
            setValue={setSearch}
          />
          <CardList data={cards} setLike={setLike} />
        </>
      }
    ></BasicLayout>
  );
}

export default SharePage;

import CardList from '../../components/CardList';
import SearchBox from '../../components/SearchBox';
import BasicLayout from '../../components/common/BasicLayout';
import { useEffect, useState } from 'react';
import { commonAxios } from '../../utils/commonAxios';

function LendPage() {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    commonAxios
      .get(`/post`, {
        params: {
          type: 'lend',
          search,
        },
      })
      .then(res => {
        setCards(res.data);
        console.log(res);
      })
      .catch(err => {
        alert('검색 결과가 존재하지 않습니다.');
        console.error(err);
      });
  }, [search]);

  return (
    <BasicLayout
      children={
        <>
          <SearchBox
            text1="대여:"
            text2="합니다"
            value="lend"
            setValue={setSearch}
          />
          <CardList data={cards} />
        </>
      }
    ></BasicLayout>
  );
}

export default LendPage;

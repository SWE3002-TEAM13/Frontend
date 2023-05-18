import CardList from '../../components/CardList';
import SearchBox from '../../components/SearchBox';
import BasicLayout from '../../components/common/BasicLayout';
import { useEffect, useState } from 'react';
import { commonAxios } from '../../utils/commonAxios';

function RentPage() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    commonAxios
      .get('/post', {
        params: {
          type: 'lend',
          search: null,
        },
      })
      .then(res => {
        setCards(res.data);
        console.log(res);
      })
      .catch(err => {
        alert('검색 결과가 존재하지 않습니다.');
        console.log(err);
      });
  }, []);

  const onSearch = e => {};
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
          <CardList data={cards} more />
        </>
      }
    ></BasicLayout>
  );
}

export default RentPage;

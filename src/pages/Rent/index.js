import CardList from "../../components/CardList";
import SearchBox from "../../components/SearchBox";
import BasicLayout from "../../components/common/BasicLayout";

function RentPage() {
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
          <CardList />
        </>
      }
    ></BasicLayout>
  );
}

export default RentPage;

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
            type="rent"
            onClick={onSearch}
          />
        </>
      }
    ></BasicLayout>
  );
}

export default RentPage;

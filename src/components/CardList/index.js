import {
  CardListAndMoreContainer,
  CardListContainer,
  SingleCardContainer,
  MoreButtonContainer,
  MoreButton,
} from "./styles";
import Card from "../Card";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function CardList({ data, more, setLike }) {
  const navigate = useNavigate();
  const [islike, setIsLike] = useState();

  useEffect(() => {
    setLike(islike);
  }, [islike]);

  return (
    <CardListAndMoreContainer>
      <CardListContainer>
        {data &&
          data.map((item, index) => {
            return (
              <SingleCardContainer key={index}>
                {/* <Card
                  data={item}
                  islike={data.islike}
                  setIslike={setIsLike}
                  onClick={() => navigate(`/info/${item.id}`)}
                /> */}
                <Card
                  islike={item.islike}
                  setIslike={setIsLike}
                  key={index}
                  data={item}
                  onClick={() => navigate(`/info/${item.id}`)}
                />
              </SingleCardContainer>
            );
          })}
      </CardListContainer>
      {more ? (
        <MoreButtonContainer>
          <MoreButton>+ 더 불러오기</MoreButton>
        </MoreButtonContainer>
      ) : (
        ""
      )}
    </CardListAndMoreContainer>
  );
}

export default CardList;

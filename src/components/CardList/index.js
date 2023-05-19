import {
  CardListAndMoreContainer,
  CardListContainer,
  SingleCardContainer,
  MoreButtonContainer,
  MoreButton,
} from "./styles";
import Card from "../Card";
import { Link } from "react-router-dom";

function CardList({ data, more }) {
  return (
    <CardListAndMoreContainer>
      <CardListContainer>
        {data &&
          data.map((item, index) => {
            return (
              <SingleCardContainer key={index}>
                <Link to={`/info/${item.id}`}>
                  <Card data={item} />
                </Link>
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

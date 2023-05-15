import {
  CardListAndMoreContainer,
  CardListContainer,
  SingleCardContainer,
  MoreButtonContainer,
  MoreButton,
} from "./styles";

import Card from "../Card";
import { Link } from "react-router-dom";

function CardList({ data }) {
  return (
    <CardListAndMoreContainer>
      <CardListContainer>
        {data &&
          data.map((item, index) => {
            return (
              <SingleCardContainer key={index}>
                {/*eslint-disable-next-line*/}
                <Link to={`/info/${item.id}`}>
                  <Card data={item} />
                </Link>
              </SingleCardContainer>
            );
          })}
      </CardListContainer>
      <MoreButtonContainer>
        <MoreButton>+ 더 불러오기</MoreButton>
      </MoreButtonContainer>
    </CardListAndMoreContainer>
  );
}

export default CardList;

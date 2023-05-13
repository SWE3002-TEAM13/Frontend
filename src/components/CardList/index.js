import {
  CardListAndMoreContainer,
  CardListContainer,
  SingleCardContainer,
  MoreButtonContainer,
  MoreButton,
} from "./styles";

import Card from "../Card";

function CardList() {
  return (
    <CardListAndMoreContainer>
      <CardListContainer>
        <SingleCardContainer>
          <Card></Card>
        </SingleCardContainer>
        <SingleCardContainer>
          <Card></Card>
        </SingleCardContainer>
        <SingleCardContainer>
          <Card></Card>
        </SingleCardContainer>
        <SingleCardContainer>
          <Card></Card>
        </SingleCardContainer>
      </CardListContainer>
      <MoreButtonContainer>
        <MoreButton>+ 더 불러오기</MoreButton>
      </MoreButtonContainer>
    </CardListAndMoreContainer>
  );
}

export default CardList;

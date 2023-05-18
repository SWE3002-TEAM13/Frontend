import {
  CardListAndMoreContainer,
  CardListContainer,
  SingleCardContainer,
  MoreButtonContainer,
  MoreButton,
} from "./styles";

import Card from "../Card";

function CardList({ data, more }) {
  return (
    <CardListAndMoreContainer>
      <CardListContainer>
        {data &&
          data.map((item, index) => {
            return (
              <SingleCardContainer key={index}>
                <Card data={item} />
              </SingleCardContainer>
            );
          })}
      </CardListContainer>
      {more ?
        <MoreButtonContainer>
          <MoreButton>+ 더 불러오기</MoreButton>
        </MoreButtonContainer> : ''
      }
    </CardListAndMoreContainer>
  );
}

export default CardList;
